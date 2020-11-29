import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MyLike from "./MyLike";
import MyPost from "./MyPost";
import SetProfile from "./SetProfile";

export default function ProfileSummary({ navigation }) {
  var userInfo = {
    imgUri: "",
    name: "",
  };
  userInfo.imgUri = require("../../assets/아이유1.jpg");
  userInfo.name = "이지금";
  var PostOrLike = "Post";
  const [isShowingPost, setIsShowingPost] = useState(true);

  return (
    <>
      <View style={styles.area1}>
        <View style={styles.area1_1}>
          <Image
            source={userInfo.imgUri}
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
        </View>

        <View style={styles.area1_2}>
          <Text style={styles.textName}> {userInfo.name}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("SetProfile");
            }}
          >
            <Text style={styles.textBtn}>개인 설정</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.area1_3}>
          <Text style={styles.textName}> </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={{ flexDirection: "row", backgroundColor: "#ffffff" }}>
          <TouchableOpacity
            onPress={() => {
              setIsShowingPost(!isShowingPost);
            }}
          >
            <Text style={styles.like_post}>게시글</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsShowingPost(!isShowingPost);
            }}
          >
            <Text style={styles.like_post}>좋아요</Text>
          </TouchableOpacity>
        </View>
        <View>{isShowingPost ? <MyPost /> : <MyLike />}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  area1: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d2d2d2",
  },
  area1_1: {
    flex: 0.8,
  },
  area1_2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  area1_3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textName: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 5,
    height: 40,
  },
  btn: {
    width: 100,
    height: 30,
    borderColor: "#d2d2d2",
    borderWidth: 1,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
  },
  textBtn: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
  },
  like_post: {
    fontSize: 12,
    padding: 5,
    color: "#333333",
  },
});
