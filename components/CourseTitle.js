import * as React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styled from "styled-components/native";
import * as theme from "../assets/theme";

import {connect} from "react-redux";
import {setCourse} from "../reducers/courseReducer";

const Container = styled.View`
  height: 100px;
  width: 100vw;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #e3e3e3;
  background-color:#f5f5f5;
`;
const Row = styled.View`
  flex: ${({ flex }) => (flex ? flex : 1)};
  width: 100vw;
  padding-left: 25px;
  padding-right: 25px;
  flex-direction: row;
  align-items: flex-end;
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop}` : "")}
  ${({ paddingBottom }) =>
    paddingBottom ? `padding-bottom: ${paddingBottom}` : ""}
`;
const IconContainer = styled.TouchableOpacity`
  margin-right: 20px;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const Profile = styled.Image`
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;

function CourseTitle({
  editMode,
  course,
  setCourse,
  setCalendarVisible,
}) {

  return (
    <Container>
      {editMode ? (
        <>
          <Row flex={5.5} paddingTop="14px">
            <TextInput 
              autoFocus
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
              style={{ justifycontent: "flex-start" }}
              onPress={()=>setCalendarVisible(true)}
            >
              <Image style={{width:14, height:14}} source={{uri: require("../assets/Calendar.png")}}/>
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
            <IconContainer style={{ justifycontent: "flex-start" }}>
              <Image style={{width:14, height:14}} source={{uri: require("../assets/Photo.png")}}/>
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
        </>
      ) : (
        <>
          <Row flex={5.5} paddingTop="14px">
            <Title>{course.courseName}</Title>
            <IconContainer
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              <Image style={{width:20, height:20}} source={{uri: require("../assets/Heart(pink).png")}}/>
              <Text
                style={{
                  fontSize: 20,
                  color: theme.PRIMARY_COLOR,
                  marginLeft: 3,
                  fontWeight: "300",
                }}
              >
                {course.heartCount}
              </Text>
            </IconContainer>
          </Row>
          <Row flex={4.5}>
            <IconContainer style={{ flex: 8 }}>
              <Profile source={{ uri: course.user.img }} />
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: 12,
                  marginLeft: 8,
                }}
              >
                {course.user.name} 조회 {course.viewCount}
              </Text>
            </IconContainer>
            <IconContainer
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: 10,
                }}
              >
                {course.date}
              </Text>
            </IconContainer>
          </Row>
        </>
      )}
    </Container>
  );
}
export default connect(
  state=>({
    course: state.course.course,
  }),
  {setCourse}
)(CourseTitle)
