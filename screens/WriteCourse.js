import * as React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native";
import * as theme from "../assets/theme";
import styled from "styled-components/native";
import CourseContent from "../components/CourseContent";
import CourseTitle from "../components/CourseTitle";
import { Calendar, LocaleConfig } from "react-native-calendars";
import LeftArrow from "../assets/images/LeftArrow";
import RightArrow from "../assets/images/RightArrow";

LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ],
  dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "kr";

const CalendarContainer = styled.View`
  position: absolute;
  width: 80vw;
  top: 10%;
  left: 10%;
  box-shadow: 3px 3px 50px rgba(0, 0, 0, 0.3);
  display: ${({display})=>display?'block':'none'}
`;

const Arrow = styled.View`
  width: 20px;
  height: 20px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  drop-shadow: 1px 1px black;
`;
const defaultCourseData = {
  title: "코스",
  user: {
    img: "",
    name: "name",
  },
  heartCount: 0,
  viewCount: 0,
  date: null,
  backgroundImg: null,
  sharing: false,
  courses: [],
  memos: [],
};
export default function Write({
  course = defaultCourseData,
  editMode = true,
}) {
  const [courseData, setCourseData] = React.useState(course);
  const [calendarVisible, setCalendarVisible] = React.useState(false);

  const setTitle = (title) => setCourseData({ ...courseData, title });
  const setDate = (date) => setCourseData({ ...courseData, date });
  const setBackgroundImg = () => setCourseData({ ...courseData }); // photo
  const setCourses = (courses) => setCourseData({ ...courseData, courses });
  const setMemos = (memos) => setCourseData({ ...courseData, memos });
  const toggleSharing = () =>
    setCourseData({ ...courseData, sharing: !courseData.sharing });

  const submitCourseData = () => {}; // dispatch action 공부 하자.
  
  let date = {}
  date[courseData.date]= { selected: true}

  return (
    <Container>
      <CourseTitle
        editMode={editMode}
        toggleSharing={toggleSharing}
        setTitle={setTitle}
        setDate={()=>{setCalendarVisible(true)}}
        date={date}
        setBackgroundImg={setBackgroundImg}
        {...courseData}
      />
      <CourseContent
        editMode={editMode}
        setCourses={setCourses}
        setMemos={setMemos}
        submitCourseData={submitCourseData}
        {...courseData}
      />
      {editMode ? (
        <CalendarContainer display={calendarVisible}>
          <Calendar
            markedDates={
              date
            }
            theme={{
              todayTextColor: theme.PRIMARY_COLOR,
              selectedDayBackgroundColor: theme.PRIMARY_COLOR,
            }}
            onDayPress={(day) => {
              setDate(day.dateString)
            }}
            monthFormat={"yyyy년 MMM"}
            renderArrow={(direction) => {
              return (
                <Arrow>
                  {direction == "left" ? <LeftArrow /> : <RightArrow />}
                </Arrow>
              );
            }}
          />
          <View style={{flexDirection:"row"}}>
            <TouchableOpacity 
              style={{
                flex:1, 
                padding:'8px',
                textAlign:'center'
              }} 
              onPress={()=>{setCalendarVisible(false);setDate(null);}}>
              <Text style={{color:theme.PRIMARY_COLOR, fontSize:"16px"}}>초기화</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{
                flex:1, 
                backgroundColor:theme.PRIMARY_COLOR,
                padding:'8px',
                textAlign:'center'
              }} 
              onPress={()=>setCalendarVisible(false)}>
              <Text style={{color:"white", fontSize:'16px'}}>확인</Text>
            </TouchableOpacity>
          </View>
        </CalendarContainer>
      ) : null}
    </Container>
  );
}
