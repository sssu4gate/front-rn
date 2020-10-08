import * as React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import CourseContent from "../components/CourseContent";
import CourseTitle from "../components/CourseTitle";

const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export default function Write() {
  const [isSharingCourse, setSharingCourse] = React.useState(false);
  const [selectedStartDate, selectStartDate] = React.useState(null);

  return (
    <Container>
      <CourseTitle
        sharingHandler={() => setSharingCourse(!isSharingCourse)}
        isSharingCourse={isSharingCourse}
      />
      <CourseContent />
    </Container>
  );
}
