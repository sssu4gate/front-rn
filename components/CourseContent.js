import * as React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;
const Content = styled.View`
  flex-direction: row;
  padding: 15px 30px;
  width: 100%;
`;
const Line = styled.View`
  margin-left:10px;
  flex:1;
  border-bottom-width: 1px
  border-bottom-color: #e3e3e3;
`;
const AddButton = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #00000040;
`;
const Indicator = styled.View`
  width: 20px;
  height: 100%;
`;

export default function CourseContent({ mode }) {
  return (
    <Container>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>코스</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <Content style={{ padding: "0" }}>
          <AddButton>
            <Text style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}>
              코스 추가
            </Text>
          </AddButton>
        </Content>
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>메모</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <Content style={{ padding: "0" }}>
          <AddButton>
            <Text style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}>
              메모 추가
            </Text>
          </AddButton>
          <Indicator />
          <AddButton>
            <Text style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}>
              체크리스트 추가
            </Text>
          </AddButton>
        </Content>
      </Content>
    </Container>
  );
}
