import * as React from "react";
import {
  useNavigation,
} from "@react-navigation/native";

import {Image, View, Text, Button, TouchableOpacity, ScrollView} from "react-native";
import { Calendar} from "react-native-calendars";
import * as theme from "../../assets/theme";
import CourseContent from "./CourseContent";
import CourseTitle from "./CourseTitle";

import {connect} from "react-redux";
import {setCourse} from "../../reducers/courseReducer";

function WriteCourse({course, loading, error, setCourse}) {
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const date={};
  course.date?date[course.date] = {selected:true}:null;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        dropShadow: "1px 1px black"
      }}
    >
      <ScrollView>
        <CourseTitle setCalendarVisible={setCalendarVisible}/>
        <CourseContent />
        <View style={{
          position: "absolute",
          width: "80vw",
          top: "10vh",
          left: "10vw",
          boxShadow: "3px 3px 50px rgba(0, 0, 0, 0.3)",
          display: calendarVisible?'block':'none'
        }}>
          <Calendar
            markedDates={date}
            theme={{
              todayTextColor: theme.PRIMARY_COLOR,
              selectedDayBackgroundColor: theme.PRIMARY_COLOR,
            }}
            onDayPress={day =>setCourse({...course, date:day.dateString})}
            monthFormat={"yyyy년 MMM"}
            renderArrow={(direction) => (
              <View>
                <Image style={{width:20, height:20}} source={{uri: require(direction=="left"?"../../assets/LeftArrow(pink).png":"../../assets/RightArrow(pink).png")}} />
              </View>
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
        </View>
      </ScrollView>
    </View>
  );
}
export default connect(
  state=>({
    course: state.course.course, 
    error:state.course.error, 
    loading:state.course.loading,
  }),
  {setCourse}
)(WriteCourse)
