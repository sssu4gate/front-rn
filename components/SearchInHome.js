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
    <View
      style={{
        width: "90%",
        height: 50,
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ff6da0",
        borderRadius: 30,
        flex: 1,
        opacity: 0.7,
        margin: 15,
      }}
    >
      <TextInput
        onChangeText={setQueryString}
        placeholder="검색"
        placeholderTextColor="#aaa"
        underlineColorAndroid="transparent"
        style={{
          color: "#777777",
          fontSize: 20,
          fontWeight: "bold",
          width: "85%",
          paddingHorizontal: 10,
        }}
        onFocus={() => Stretch()}
      />
      <TouchableOpacity
        onPress={() => console.log(queryString)}
        style={{ padding: 0 }}
      >
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/Search.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

function Stretch() {
  console.log("stretch");
}
