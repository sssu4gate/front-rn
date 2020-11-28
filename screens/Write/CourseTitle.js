import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import {connect} from "react-redux";

import {setCourse} from "../../reducers/courseReducer";
import * as theme from "../../assets/theme";
import PhotoImage from "../../assets/Photo.png"
import CalendarImage from "../../assets/Calendar.png"
import HeartPinkImage from "../../assets/Heart(pink).png"

const Container=({children, style})=>(
  <View style={{
    height:100,
    width: '100vw',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    backgroundColor: '#f5f5f5',
    ...style}}>
    {children}
  </View>
);

const Row=({children, style, flex, paddingTop, paddingBottom})=>(
  <View style={{
    flex: flex ? flex : 1,
    width: '100vw',
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    alignItems: 'right',
    paddingTop,
    paddingBottom,
    ...style}}>
    {children}
  </View>
);

const IconContainer=({children, style, onPress})=>(
  <TouchableOpacity style={{
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    ...style}}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);


const Profile=({children, style})=>(
  <Image style={{
    borderRadius: '50%',
    width: 28,
    height: 28,
    ...style}}>
    {children}
  </Image>
);
function CourseTitle({
  course,
  setCourse,
  setCalendarVisible,
}) {
  console.log(setCalendarVisible);
  return (
    <Container>
      <Row flex={5.5} paddingTop="14px">
        <TextInput 
          autoFocus
          placeholder="코스 제목"
          placeholderTextColor="#aaa"
          style={{
            fontSize: 28,
            color: "#777",
            fontWeight: "bolder",
            flex: 1
          }}
          value={course.courseName}
          onChangeText={text=>setCourse({...course, courseName:text})}
        />
      </Row>
      <Row flex={4.5}>
        <IconContainer
          style={{ justifycontent: "left" }}
          onPress={()=>setCalendarVisible(true)}
        >
          <Image style={{width:14, height:14}} source={{uri: CalendarImage}}/>
          <Text
            style={{
              fontSize: 12,
              color: theme.SECOND_TEXT_COLOR,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            {course.date ? course.date : "미정"}
          </Text>
        </IconContainer>
        <IconContainer style={{ justifycontent: "left" }}>
          <Image style={{width:14, height:14}} source={{uri: PhotoImage}}/>
          <Text
            style={{
              fontSize: 12,
              color: theme.SECOND_TEXT_COLOR,
              fontWeight: "bold",
              marginLeft: 5,
            }}
          >
            사진 변경
          </Text>
        </IconContainer>
      </Row>
    </Container>
  );
}
export default connect(
  state=>({
    course: state.course.course,
  }),
  {setCourse}
)(CourseTitle)