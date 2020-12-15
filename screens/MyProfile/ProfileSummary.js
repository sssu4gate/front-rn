import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import MyLike from "./MyLike";
import MyPost from "./MyPost";
import PostList from "./PostList";
import Settings from "./Settings";
import { connect } from "react-redux";
import {
  requestLoginUser,
  requestUserPostListCommunity,
} from "../../reducers/userReducer";
import * as theme from "../../assets/theme";
import { setRefresh } from "../../reducers/refreshReducer";
import LoadingSVG from "../../assets/Loading";

export default connect(
  (state) => ({
    user: state.user,
    token: state.user.accessToken,
    postList:state.user.postList,
    refresh: state.refresh,
  }),
  { requestUserPostListCommunity, setRefresh }
)(function ProfileSummary({ navigation, user, requestUserPostListCommunity, postList, token, refresh, setRefresh }) {
  const [board, setBoard] = useState("WRITE");

  const [refreshing, setRefreshing] = React.useState(true);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
    }, []);
  React.useEffect(() => {
      const unsubscribe = navigation.addListener("tabPress", (e) => {
        setRefreshing(true);
      });
      return unsubscribe;
    }, [navigation]);

  React.useEffect(() => {
      if (refresh.Community) {
        setRefresh({
          ...refresh,
          MyProfile: false,
        });
        if (!refreshing) setRefreshing(true);
      }
    }, [refresh.Community]);

  React.useEffect(() => {
      if (refreshing) {
        setRefreshing(false);
        requestUserPostListCommunity(token, 1, 10, board);
      }
    }, [refreshing]);

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.area1}>
        <View style={styles.area1_1}>
          {user.userImgUrl ? (
            <Image
              source={{ uri: user.userImgUrl }}
              style={styles.profileImg}
            />
          ) : (
            <Image
              source={require("../../assets/아이유1.jpg")}
              style={styles.profileImg}
            />
          )}
        </View>

        <View style={styles.area1_2}>
          <Text style={styles.textName}>{user.nickName}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <Text style={styles.textBtn}>계정 설정</Text>
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
        <View style={{ flexDirection: "row", backgroundColor: "#ffffff", marginLeft:10, marginTop:10}}>
          <TouchableOpacity
            onPress={() => {
              setBoard("WRITE");
              setRefreshing(true);
            }}
          >
            <Text style={{...styles.like_post, color:board=="WRITE"?theme.PRIMARY_COLOR:"#777" }}>게시글</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBoard("LIKE");
              setRefreshing(true);
            }}
          >
            <Text style={{...styles.like_post, color:board=="LIKE"?theme.PRIMARY_COLOR:"#777"}}>좋아요</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        postList[board].loading?(
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <LoadingSVG width={80} height={80} />
          </View>
        ):(<PostList postList={postList[board].postList}/>)
      }
    </ScrollView>
  );
});

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
    color: "#777777",
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
    color: "#777777",
  },
  like_post: {
    fontSize: 12,
    padding: 5,
    color: "#777777",
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: "center",
  },
});
