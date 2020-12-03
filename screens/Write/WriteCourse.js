import * as React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";
import * as theme from "../../assets/theme";
import CourseContent from "./CourseContent";
import CourseTitle from "./CourseTitle";
import { TabActions } from "@react-navigation/native";

import { connect } from "react-redux";
import { initPlace } from "../../reducers/placeReducer";
import {
  setCourse,
  initCourse,
  requestSaveCourse,
} from "../../reducers/courseReducer";
import { moveCommunityPost } from "../../reducers/communityReducer";

function WriteCourse({
  navigation,
  course,
  loading,
  error,
  setCourse,
  uploaded,
  initCourse,
  initPlace,
  selectedPlaces,
  requestSaveCourse,
  token,
}) {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [text, setText] = React.useState("");
  const date = {
    ...(course.date ? { [course.date]: { selected: true } } : {}),
  };

  const initHandler = () => {
    setTitle("");
    setText("");
    setContent("");
    initCourse();
    initPlace();
  };

  const saveHandler = () => {
    console.log(course);
    const memoTypeMap = { 0: "CHECKOFF", 1: "CHECKON", 2: "MEMO" };
    const finalCourse = {
      content: content,
      courseName: title,
      dateDay: course.date,
      memos: course.memos.map((memo) => ({
        content: memo.text,
        type: memoTypeMap[memo.type],
      })),
      places: selectedPlaces.map((place) => ({
        cost: 0,
        time: "0",
        id: place.id,
      })),
      savePlaces: selectedPlaces,
      shareType: course.shareType,
    };
    requestSaveCourse(token, finalCourse);
  };

  React.useEffect(() => {
    if (uploaded) {
      if (course.shareType == "PUBLIC") {
        moveCommunityPost(course.id, "Trend");
      }
      navigation.dispatch(TabActions.jumpTo("Community"));
      initHandler();
    }
  }, [uploaded]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <Modal
          isVisible={calendarVisible}
          onBackdropPress={() => setCalendarVisible(false)}
        >
          <View
            style={{
              width: Dimensions.get("window").width * 0.8,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Calendar
              markedDates={date}
              theme={{
                todayTextColor: theme.PRIMARY_COLOR,
                selectedDayBackgroundColor: theme.PRIMARY_COLOR,
              }}
              onDayPress={(day) =>
                setCourse({ ...course, date: day.dateString })
              }
              monthFormat={"yyyy년 MMM"}
              renderArrow={(direction) => (
                <View>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={
                      direction == "left"
                        ? require("../../assets/LeftArrow(pink).png")
                        : require("../../assets/RightArrow(pink).png")
                    }
                  />
                </View>
              )}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  padding: 8,
                  backgroundColor: "#fff",
                }}
                onPress={() => {
                  setCalendarVisible(false);
                  setCourse({ ...course, date: null });
                }}
              >
                <Text
                  style={{
                    color: theme.PRIMARY_COLOR,
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  초기화
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: theme.PRIMARY_COLOR,
                  padding: 8,
                }}
                onPress={() => setCalendarVisible(false)}
              >
                <Text
                  style={{ color: "white", fontSize: 16, textAlign: "center" }}
                >
                  확인
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <CourseTitle
          setCalendarVisible={setCalendarVisible}
          title={title}
          setTitle={setTitle}
        />
        <CourseContent
          content={content}
          setContent={setContent}
          text={text}
          setText={setText}
          initHandler={initHandler}
          saveHandler={saveHandler}
        />
      </ScrollView>
    </View>
  );
}
export default connect(
  (state) => ({
    course: state.course.course,
    error: state.course.error,
    loading: state.course.loading,
    uploaded: state.course.uploaded,
    selectedPlaces: state.place.selectedPlaces,
    token: state.user.accessToken,
  }),
  { setCourse, initCourse, initPlace, requestSaveCourse }
)(WriteCourse);
