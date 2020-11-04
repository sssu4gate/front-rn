import * as React from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";
import styled from "styled-components/native";

const ContainerHot = styled.View`
  width: 80%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: #fff;
  padding: 10px 20px;
`;

export default function HotCourse() {
  return (
    <>
      <ContainerHot>
        <Text>s</Text>
      </ContainerHot>
    </>
  );
}
