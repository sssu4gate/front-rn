import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import {moveCommunityPost} from "../../reducers/communityReducer";
import { useNavigation } from "@react-navigation/native";

function MyPost({postList, moveCommunityPost}) {
  const navigation=useNavigation();
  return (
    <View style={{marginTop:20}}>
      {
        postList?.length!=0?(
        postList.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            imgUri={post.courseImgUrl}
            title={post.title}
            like={post.likeNum}
            navigation={navigation}
            moveCommunityPost={moveCommunityPost}
          />
        );
        })):(
          <View style={{flex:1, justifyContent:"center", alignItems:"center", paddingTop:200}}>
            <Text style={{fontSize:30, color:"#777"}}>아직 게시글이 없어요!</Text>
          </View>
        )}
    </View>
  );
}

export default connect(
  state=>({
  }),
  { moveCommunityPost, }
)(MyPost);

function Post({ id, imgUri, title, like, moveCommunityPost, navigation }) {
  return (
    <TouchableOpacity style={styles.postArea} onPress={
      ()=>{
        moveCommunityPost(id, "Popularity");
        navigation.navigate("Community");
      }
    }>
      {imgUri ? (
        <Image
           style={styles.img}
          source={{ uri: imgUri }}
        />
      ) : (
        <View
          style={{
            ...styles.img,
            backgroundColor: "#ebf3fb",
          }}
        ></View>
      )}
      <View style={styles.titleLine}>
        <Text style={{ flex: 0.2 }} />
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.like}>
          <Image
            style={{ width: 20, height: 20, marginRight:5 }}
            source={require("../../assets/Heart(pink).png")}
          />
          <Text style={{color:"#777"}}>{like}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postArea: {
    padding: 5,
    alignContent: "center",
    textAlign: "center",
  },
  img: {
    width: "85%",
    height: 140,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom:10,
  },
  titleLine: {
    flexDirection: "row",
  },
  like: {
    flexDirection: "row",
    flex: 0.2,
    marginRight:10,
    alignItems:"center"
  },
  titleText: {
    flex: 1,
    color: "#777777",
    fontSize: 20,
  },
});
