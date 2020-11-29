import * as React from "react";
import styled from "styled-components/native";
import { TextInput, View, TouchableOpacity, Image } from "react-native";

const Container = styled.View`
  width: 90%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: #fff;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-top-color: #ff6da0;
  border-bottom-color: #ff6da0;
  border-right-color: #ff6da0;
  border-left-color: #ff6da0;
  padding: 10px 20px;
  border-radius: 30px;
`;

export default function SearchInHome() {
  const [queryString, setQueryString] = React.useState("");
  return (
    <Container>
      <TextInput
        onChangeText={setQueryString}
        placeholder="테마"
        placeholderTextColor="#aaa"
        underlineColorAndroid="transparent"
        style={{
          color: "#777777",
          width: "100%",
          height: "100%",
          fontSize: 20,
          weight: "bold",
        }}
        onFocus={() => Stretch()}
      />
      <TouchableOpacity onPress={() => console.log(queryString)}>
        <Image style={{width:24, height:24}} source={{uri: require("../assets/Search.png")}}/>
      </TouchableOpacity>
    </Container>
  );
}

function Stretch() {
  console.log("stretch");
}
