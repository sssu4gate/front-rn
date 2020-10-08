import * as React from "react";
import { Text, ScrollView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Search from "../components/Search";

const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const CourseList = styled.View`
  flex-direction: row;
  width: 100vw;
  height: 50px;
  background-color: #f5f5f5;
  padding: 15px 20px;
`;

function CourseItem({ imgURL, text, handler }) {
  return (
    <View>
      <Image />
      <Text></Text>
      <DeleteButton></DeleteButton>
    </View>
  );
}

export default function Write() {
  return (
    <Container>
      <Search></Search>
      <CourseList>
        <ScrollView
          style={{ color: "#f87996", fontSize: "14px" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingStart: 5,
            paddingEnd: 5,
          }}
        ></ScrollView>
      </CourseList>
      <FlatList />
    </Container>
  );
}
