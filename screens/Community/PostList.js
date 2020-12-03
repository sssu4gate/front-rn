import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabActions } from "@react-navigation/native";
import {moveCommunityTab, moveCommunityPost, requestPostListCommunity} from "../../reducers/communityReducer";
import {connect} from "react-redux";

const Tab = createMaterialTopTabNavigator();

export default function PostList({ navigation, route }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor:"#fff",
        indicatorStyle: { backgroundColor: "#fff" },
        style: { backgroundColor: "#FF6DA0" },
        labelStyle: {fontSize:18, fontWeight:"bold"}
      }}
      initialRouteName={route.params?.screen}
    >
      <Tab.Screen name="Popularity" options={{tabBarLabel:"인기"}} component={PostListPreview} initialParams={{option:"LIKE"}}/>
      <Tab.Screen name="Trend" options={{tabBarLabel:"최신"}} component={PostListPreview} initialParams={{option:"LATEST"}}/>
      <Tab.Screen name="Loco" options={{tabBarLabel:"추천"}} component={PostListPreview} initialParams={{option:"LIKE"}}/>
    </Tab.Navigator>
  );
}

function Post({ title, course, text, writer, profile, like, time, view, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.postView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
          <TouchableOpacity style={styles.heartView}>
            <Image
              style={{ width: 18, height: 18, marginRight:5 }}
              source={require("../../assets/Heart(pink).png")}
            />
            <Text style={styles.heartText}>{like}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.titleView}>
          <Image style={styles.profile} source={{ uri: profile }} />
          <Text style={styles.infoText}>{writer}</Text>
          <Text style={styles.infoText}>댓글 {view}</Text>
          <Text style={styles.infoText}></Text>
          <Text style={styles.infoText}></Text>
          <Text style={styles.infoText2}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const PostListPreview=connect(
  state=>({
    postList:state.community.postList,
    token:state.user.accessToken,
    isSigned:state.user.isSigned
  }),
  {requestPostListCommunity}
)(({ route:{params:{option}}, navigation, requestPostListCommunity, postList, token, isSigned}) => {
  const [refreshing, setRefreshing] = React.useState(true);

  React.useEffect(()=>{
    console.log(postList);
    if (isSigned == "signed" && refreshing) {
      setRefreshing(false);
      requestPostListCommunity(token, 1, 10, option);
    }
  }, [isSigned, refreshing])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <ScrollView style={styles.scrollView} refreshing={refreshing} onRefresh={onRefresh}>
      {isSigned == "signed" && !postList["LIKE"].loading?
        postList[option].postList.map((post) => {
          return (
            <View key={post.id}>
              <Post
                title={post.title}
                like={post.likeNum}
                view={post.commentNum}
                time={post.createdAt}
                course={post.course}
                text={post.text}
                writer={post.writer}
                profile={post.profile}
                onPress={()=>navigation.navigate("PostDetail", {id: post.id})}
              />
              <View style={styles.indicator} />
            </View>
          );
        })
        :
        <Text>loading</Text>
      }
    </ScrollView>
  );
})

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
  },
  postView: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  titleText: {
    alignSelf: "center",
    fontSize: 20,
    color: "#000000",
    flex: 0.8,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    paddingLeft: 20,
  },
  heartText: {
    fontSize: 20,
    color: "#FF6DA0",
  },
  heartView: {
    flexDirection: "row",
    alignItems:"center",
    flex: 0.3,
  },
  text: {
    fontSize: 14,
    color: "#777777",
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  infoText: {
    fontSize: 10,
    color: "#777777",
    padding: 3,
    flex: 0.15,
    textAlign: "left",
  },
  infoText2: {
    fontSize: 10,
    color: "#777777",
    padding: 5,
    flex: 0.3,
  },
  indicator: {
    width: 320,
    height: 1,
    backgroundColor: "#e3e3e3",
    margin: 5,
    alignSelf: "center",
  },
  profile: {
    flex: 0.1,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
