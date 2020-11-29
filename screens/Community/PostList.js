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

const Tab = createMaterialTopTabNavigator();

function Post({ title, course, text, writer, profile, like, time, view }) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("asd");
      }}
    >
      <View style={styles.postView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
          <TouchableOpacity style={styles.heartView}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/Heart(pink).png")}
            />
            <Text style={styles.heartText}>{like}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.titleView}>
          <Image style={styles.profile} source={{ uri: profile }} />
          <Text style={styles.infoText}>{writer}</Text>
          <Text style={styles.infoText}>조회 {view}</Text>
          <Text style={styles.infoText}></Text>
          <Text style={styles.infoText}></Text>
          <Text style={styles.infoText2}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function getPost(board) {
  var Posts = [
    {
      title: "태바준보",
      course: "a, b, c",
      text: "나는 바보다 히히히히히히히",
      writer: "김태준",
      profile:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTExMjlfMjA3/MDAxNTc0OTc2Nzg1MzMy.WJhzcrbtitmAgLJDtqwebCR1hDQbxcQUPvAvdxpk5O8g.vCs9wsVGbokP2KX1LUkr4hXoeEkRZYTzGkSGmFNeZ7og.JPEG.pomon64/iumini5mvkbk_201.jpg?type=w800",
      like: 119,
      time: "2020-11-11",
      view: 1000,
      id: 0,
    },
    {
      title: "title2",
      course: "a, b, c",
      text: "text",
      writer: "b",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 1,
    },
    {
      title: "title3",
      course: "a, b, c",
      text: "text",
      writer: "c",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 2,
    },
    {
      title: "title2",
      course: "a, b, c",
      text: "text",
      writer: "b",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 3,
    },
    {
      title: "title2",
      course: "a, b, c",
      text: "text",
      writer: "b",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 4,
    },
    {
      title: "title2",
      course: "a, b, c",
      text: "text",
      writer: "b",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 5,
    },
    {
      title: "title2",
      course: "a, b, c",
      text: "text",
      writer: "b",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 6,
    },
    {
      title: "title2",
      course: "a, b, c",
      text: "text",
      writer: "b",
      profile:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.insight.co.kr%2Fnews%2F253785&psig=AOvVaw2zavZ7gKYonCsNL_ONdaDP&ust=1605170783455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODexKiN-uwCFQAAAAAdAAAAABAD",
      like: 0,
      time: "2020-11-11",
      view: 0,
      id: 7,
    },
  ];
  return Posts;
}

function Popularity() {
  var Posts = getPost("Popularity");
  return (
    <ScrollView style={styles.scrollView}>
      {Posts.map((post) => {
        return (
          <>
            <Post
              key={post.id}
              title={post.title}
              course={post.course}
              text={post.text}
              writer={post.writer}
              profile={post.profile}
              like={post.like}
              time={post.time}
              view={post.view}
            />
            <View style={styles.indicator} />
          </>
        );
      })}
    </ScrollView>
  );
}

function Trend() {
  var Posts = getPost("Trend");
  return (
    <ScrollView style={styles.scrollView}>
      {Posts.map((post) => {
        return (
          <>
            <Post
              key={post.id}
              title={post.title}
              course={post.course}
              text={post.text}
              writer={post.writer}
              profile={post.profile}
              like={post.like}
              time={post.time}
              view={post.view}
            />
            <View style={styles.indicator} />
          </>
        );
      })}
    </ScrollView>
  );
}

function Loco() {
  var Posts = getPost("Loco");
  return (
    <ScrollView style={styles.scrollView}>
      {Posts.map((post) => {
        return (
          <>
            <Post
              key={post.id}
              title={post.title}
              course={post.course}
              text={post.text}
              writer={post.writer}
              profile={post.profile}
              like={post.like}
              time={post.time}
              view={post.view}
            />
            <View style={styles.indicator} />
          </>
        );
      })}
    </ScrollView>
  );
}

export default function CourseList({ navigation, route }) {
  console.log(navigation, route);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintiColor: "white",
        inactiveTintColor: "white",
        indicatorStyle: { backgroundColor: "white" },
        style: { backgroundColor: "#FF6DA0" },
      }}
      initialRouteName={route.params?.screen}
    >
      <Tab.Screen name="Popularity" component={Popularity} />
      <Tab.Screen name="Trend" component={Trend} />
      <Tab.Screen name="Loco" component={Loco} />
    </Tab.Navigator>
  );
}

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
