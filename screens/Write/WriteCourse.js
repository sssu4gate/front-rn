import * as React from "react";
import {
  useNavigation,
} from "@react-navigation/native";

import {View, Text, Button, TouchableOpacity, ScrollView} from "react-native";
import styled from "styled-components/native";
import { Calendar} from "react-native-calendars";
import * as theme from "../../assets/theme";
import CourseContent from "../../components/CourseContent";
import CourseTitle from "../../components/CourseTitle";
import LeftArrow from "../../assets/images/LeftArrow";
import RightArrow from "../../assets/images/RightArrow";

import {connect} from "react-redux";
import {setCourse} from "../../reducers/courseReducer";

const CalendarContainer = styled.View`
  position: absolute;
  width: 80vw;
  top: 10vh;
  left: 10vw;
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

function WriteCourse({course, loading, error, setCourse, route:{params:{editMode}}}) {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const date={};
  course.date?date[course.date] = {selected:true}:null;

  return (
    <Container>
      <ScrollView>
      <CourseTitle editMode={editMode} setCalendarVisible={setCalendarVisible}/>
      <CourseContent editMode={editMode}/>
      { editMode ? (
          <CalendarContainer display={calendarVisible}>
            <Calendar
              markedDates={date}
              theme={{
                todayTextColor: theme.PRIMARY_COLOR,
                selectedDayBackgroundColor: theme.PRIMARY_COLOR,
              }}
              onDayPress={day =>setCourse({...course, date:day.dateString})}
              monthFormat={"yyyy년 MMM"}
              renderArrow={(direction) => (
                <Arrow>
                  {direction == "left" ? <LeftArrow /> : <RightArrow />}
                </Arrow>
              )}
              />
              <View style={{flexDirection:"row"}}>
              <TouchableOpacity 
                style={{
                  flex:1, 
                  padding:'8px',
                  backgroundColor:"#fff",
                  textAlign:'center'
                }} 
                onPress={()=>{setCalendarVisible(false);setCourse({...course, date:null});}}>
                <Text style={{color:theme.PRIMARY_COLOR, fontSize:"16px"}}>초기화</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{
                  flex:1, 
                  backgroundColor:theme.PRIMARY_COLOR,
                  padding:'8px',
                  textAlign:'center'
                }} 
                onPress={()=>setCalendarVisible(false)}
              >
                <Text style={{color:"white", fontSize:'16px'}}>확인</Text>
              </TouchableOpacity>
            </View>
          </CalendarContainer>
        ) : 
        null}
      </ScrollView>
    </Container>);
}
export default connect(
  state=>({
    course: state.course.course, 
    error:state.course.error, 
    loading:state.course.loading,
  }),
  {setCourse}
)(WriteCourse)
