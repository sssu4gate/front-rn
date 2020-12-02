import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, TabActions } from "@react-navigation/native";
import styled from "styled-components/native";
import {moveCommunityTab, moveCommunityPost, requestPostListCommunity} from "../reducers/communityReducer";
import {connect} from "react-redux";

function HotCourse({moveCommunityTab, moveCommunityPost, requestPostListCommunity, postList, isSigned, token}) {
  React.useEffect(()=>{
    // 서버 바뀌면 수정해야하
    if(isSigned=='signed' && !postList["LIKE"].loading && !(postList["LIKE"].page==0 && postList["LIKE"].offset==5  && postList["LIKE"].postList.length!=0))
      requestPostListCommunity(token, 0, 5, "LIKE");
  }, [postList, isSigned])

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.row}>
        <Text style={{ flex: 0.2 }}> </Text>
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
        {(isSigned=='unsigned' || postList["LIKE"].loading || postList["LIKE"].postList.length==0)?
          <Text>loading</Text>
          :
          postList["LIKE"]?.postList.map((course, index) => {
          return (
            <Hot5
              key={course.id}
              title={course.title}
              rank={index+1}
              like={course.likeNum}
              id={course.id}
              moveCommunityPost={moveCommunityPost}
            />
          );
        })}
      </View>
    </>
  );
}


export default connect(
  state=>({
    postList:state.community.postList,
    isSigned:state.user.isSigned,
    token:state.user.accessToken,
  }),
  {moveCommunityTab, moveCommunityPost, requestPostListCommunity}
)(HotCourse)

function Hot5({ uri, title, like, rank, id, moveCommunityPost }) {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <View
        style={{
          flex: 0.1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text style={styles.text}>{rank}</Text>
        <View style={{ width: 1, height: "100%", backgroundColor: "#eee" }} />
      </View>
      <TouchableOpacity
        style={{ flex: 0.7, alignItems: "center" }}
        onPress={() =>{
            moveCommunityPost(id, "Popularity");
            navigation.navigate("Community");
          }
        }
      >
        <Text style={styles.hot5Title}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: "row", flex: 0.2, alignItems: "center" }}
        onPress={() => {
          console.log("Like");
        }}
      >
        <Image
          style={{ width: 14, height: 14 }}
          source={require("../assets/Heart(gray).png")}
        />
        <Text style={styles.more}>{like}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
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
    flex: 0.6,
    textAlign: "center",
  },
  more: {
    color: "#b0b0b0",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    flex: 0.2,
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
