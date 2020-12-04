import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, TabActions } from "@react-navigation/native";
import styled from "styled-components/native";
import {
  moveCommunityTab,
  moveCommunityPost,
  requestPostListCommunity,
} from "../../reducers/communityReducer";
import { connect } from "react-redux";
import LoadingSVG from "../../assets/Loading";

function HotCourse({
  moveCommunityTab,
  moveCommunityPost,
  requestPostListCommunity,
  postList,
  token,
  refreshing,
  setRefreshing,
}) {
  React.useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
      requestPostListCommunity(token, 1, 5, "LIKE");
    }
  }, [refreshing]);

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.row}>
        <Text style={{ width: "20%" }}> </Text>
        <Text style={styles.title}>인기코스 TOP 5</Text>
        <TouchableOpacity
          style={styles.more}
          onPress={() => {
            moveCommunityTab("Popularity");
            navigation.navigate("Community");
          }}
        >
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "90%", alignSelf: "center", flexGrow: 1 }}>
        {!postList["LIKE"].loading ? (
          postList["LIKE"].postList?.slice(0, 5).map((course, index) => {
            return (
              <Hot5
                key={course.id}
                title={course.title}
                rank={index + 1}
                like={course.likeNum}
                id={course.id}
                moveCommunityPost={moveCommunityPost}
              />
            );
          })
        ) : (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <LoadingSVG width={80} height={80} />
          </View>
        )}
      </View>
    </>
  );
}

export default connect(
  (state) => ({
    postList: state.community.postList,
    token: state.user.accessToken,
  }),
  { moveCommunityTab, moveCommunityPost, requestPostListCommunity }
)(HotCourse);

function Hot5({ uri, title, like, rank, id, moveCommunityPost }) {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <View
        style={{
          width: "10%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={[styles.text, { marginRight: 12 }]}>{rank}</Text>
        <View
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#eeeeee",
          }}
        >
          <Text />
        </View>
      </View>
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center", marginLeft: 5 }}
        onPress={() => {
          moveCommunityPost(id, "Popularity");
          navigation.navigate("Community");
        }}
      >
        <Text style={styles.hot5Title}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => {
          console.log("Like");
        }}
      >
        <Image
          style={{ width: 14, height: 14 }}
          source={require("../../assets/Heart(gray).png")}
        />
        <Text style={styles.more}>{like}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    flexGrow: 1,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
    width: "60%",
    textAlign: "center",
  },
  more: {
    color: "#b0b0b0",
    fontSize: 12,
    fontWeight: "bold",
    padding: 10,
  },
  text: {
    color: "#000",
    fontSize: 20,
    alignSelf: "flex-start",
    padding: 10,
  },
  hot5Title: {
    color: "#000",
    fontSize: 14,
    alignSelf: "flex-start",
    textAlign: "center",
    padding: 10,
  },
});
