import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { requestPostListCommunity } from "../../reducers/communityReducer";
import { connect } from "react-redux";
import LoadingSVG from "../../assets/Loading";
import { setRefresh } from "../../reducers/refreshReducer";

const Tab = createMaterialTopTabNavigator();

export default function PostList({ navigation, route }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#fff",
        indicatorStyle: { backgroundColor: "#fff" },
        style: { backgroundColor: "#FF6DA0" },
        labelStyle: { fontSize: 18, fontWeight: "bold" },
      }}
      initialRouteName={route.params?.screen}
    >
      <Tab.Screen
        name="Popularity"
        options={{ tabBarLabel: "인기" }}
        component={PostListPreview}
        initialParams={{ option: "LIKE" }}
      />
      <Tab.Screen
        name="Trend"
        options={{ tabBarLabel: "최신" }}
        component={PostListPreview}
        initialParams={{ option: "LATEST" }}
      />
      <Tab.Screen
        name="Loco"
        options={{ tabBarLabel: "추천" }}
        component={PostListPreview}
        initialParams={{ option: "REC" }}
      />
    </Tab.Navigator>
  );
}

const PostListPreview = connect(
  (state) => ({
    postList: state.community.postList,
    token: state.user.accessToken,
    refresh: state.refresh,
  }),
  { requestPostListCommunity, setRefresh }
)(
  ({
    route: {
      params: { option },
    },
    navigation,
    requestPostListCommunity,
    postList,
    token,
    refresh,
    setRefresh,
  }) => {
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
          Community: false,
        });
        if (!refreshing) setRefreshing(true);
      }
    }, [refresh.Community]);

    React.useEffect(() => {
      if (refreshing) {
        setRefreshing(false);
        requestPostListCommunity(token, 1, 10, option);
      }
    }, [refreshing]);

    return (
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {!postList[option].loading || postList[option].postList?.length ? (
          postList[option].postList.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                like={post.likeNum}
                view={post.commentNum}
                time={post.createdAt}
                course={post.course}
                text={post.content}
                writer={post.nickName}
                profile={post.imgUrl}
                onPress={() =>
                  navigation.navigate("PostDetail", { id: post.id })
                }
              />
            );
          })
        ) : (
          <View style={{ alignItems: "center" }}>
            <LoadingSVG width={80} height={80} />
          </View>
        )}
      </ScrollView>
    );
  }
);

function Post({ title, text, writer, profile, like, time, view, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#e3e3e3",
      }}
    >
      <View style={styles.postView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
          <TouchableOpacity style={styles.heartView}>
            <Image
              style={{ width: 18, height: 18, marginRight: 5 }}
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
          <Text style={{ ...styles.infoText, flex: 1, textAlign: "right" }}>
            {time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ffffff",
  },
  postView: {},
  titleText: {
    alignSelf: "center",
    fontSize: 20,
    color: "#000000",
    flex: 1,
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
  },
  heartText: {
    fontSize: 20,
    color: "#FF6DA0",
  },
  heartView: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#777777",
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  infoText: {
    fontSize: 10,
    color: "#777777",
    padding: 3,
    textAlign: "left",
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
    marginRight: 5,
  },
});
