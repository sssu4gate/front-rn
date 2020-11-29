import * as React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from 'react-native-modal';
import * as theme from "../../assets/theme";
import CourseContent from "./CourseContent";
import CourseTitle from "./CourseTitle";

import { connect } from "react-redux";
import { setCourse } from "../../reducers/courseReducer";

function WriteCourse({ course, loading, error, setCourse }) {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const date = {};
  course.date ? (date[course.date] = { selected: true }) : null;

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
              marginLeft:'auto',
              marginRight:'auto',
            }}
          >
            <Calendar
              markedDates={date}
              theme={{
                todayTextColor: theme.PRIMARY_COLOR,
                selectedDayBackgroundColor: theme.PRIMARY_COLOR,
              }}
              onDayPress={(day) => setCourse({ ...course, date: day.dateString })}
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
                <Text style={{ color: theme.PRIMARY_COLOR, fontSize: 16, textAlign:'center' }}>
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
                <Text style={{ color: "white", fontSize: 16, textAlign:'center'}}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <CourseTitle setCalendarVisible={setCalendarVisible} />
        <CourseContent />
        {/*
        
        */}
      </ScrollView>
    </View>
  );
}
export default connect(
  (state) => ({
    course: state.course.course,
    error: state.course.error,
    loading: state.course.loading,
  }),
  { setCourse }
)(WriteCourse);
