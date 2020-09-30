import * as React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import CourseContent from "../components/CourseContent";
import CourseTitle from "../components/CourseTitle";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export default function Write() {
  return (
    <Container>
      <CourseTitle />
      <CourseContent />
    </Container>
  );
}
