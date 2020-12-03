import * as React from "react";
import { TextInput, View, Image, TouchableOpacity } from "react-native";

export default function Search({ searchHandler }) {
  const [queryString, setQueryString] = React.useState("");
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#ff6da0",
        borderBottomColor: "#ff6da0",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
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
        <TouchableOpacity onPress={() => searchHandler(queryString)}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/Search.png")}
          />
        </TouchableOpacity>
        {/*
        <View style={{width:1, height:30, backgroundColor:'#eee', marginLeft:10, marginRight:10}}/>
        <Image style={{width:24, height:24}} source={require("../assets/Filter.png")}/>
        */}
      </View>
    </View>
  );
}
