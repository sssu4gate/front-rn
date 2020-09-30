import * as React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: #eec;
`;

export default function CourseContent({ mode }) {
  return <Container></Container>;
}
