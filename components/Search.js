import * as React from "react";
import styled from "styled-components/native";
import { TextInput, View, Image } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: #fff;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: #ff6da0;
  border-bottom-color: #ff6da0;
  padding: 10px 20px;
`;

const Indicator = styled.View`
  width: 1px;
  height: 30px;
  background-color: #eee;
  margin-left: 10px;
  margin-right: 10px;
`;

export default function Search() {
  const [queryString, setQueryString] = React.useState("");
  return (
    <Container>
      <TextInput
        onChangeText={setQueryString}
        placeholder="장소, 카테고리..."
        placeholderTextColor="#aaa"
        underlineColorAndroid="transparent"
        style={{
          flex: 1,
          color: "#777777",
          height: "100%",
          fontSize: 20,
          fontWeight: "bold",
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/*
        <Image style={{width:24, height:24}} source={{uri: require("../assets/Search.png")}}/>
        <Indicator />
        <Image style={{width:24, height:24}} source={{uri: require("../assets/Filter.png")}}/>
        */}
      </View>
    </Container>
  );
}
