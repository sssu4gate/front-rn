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
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import HeartIcon from "../assets/images/Heart";
import Indicator from "../assets/images/indicator";
import Community from "../screens/Community";

export default function HotCourse() {
  const navigation = useNavigation();
  var courses = [
    {
      uri: "test",
      title: "롯데타워, 석촌호수 힐링 데이트~",
      rank: 1,
      like: 1,
    },
    {
      uri: "test2",
      title: "title2",
      rank: 2,
      like: 3,
    },
    {
      uri: "test3",
      title: "title3",
      rank: 3,
      like: 5,
    },
    {
      uri: "test4",
      title: "title4",
      rank: 4,
      like: 7,
    },
    {
      uri: "test5",
      title: "title5",
      rank: 5,
      like: 9,
    },
  ];

  return (
    <>
      <View style={styles.row}>
        <Text style={{ flex: 0.2 }}> </Text>
        <Text style={styles.title}>인기코스 TOP 5</Text>
        <TouchableOpacity
          style={styles.more}
          onPress={() => {
            navigation.navigate("Community", { initalScreen: "Trend" });
          }}
        >
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "90%", alignSelf: "center" }}>
        {courses.map((course) => {
          return (
            <Hot5
              key={course.uri}
              uri={course.uri}
              title={course.title}
              rank={course.rank}
              like={course.like}
            />
          );
        })}
      </View>
    </>
  );
}

function Hot5({ uri, title, like, rank }) {
  return (
    <>
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
          <Indicator />
        </View>

        <TouchableOpacity
          style={{ flex: 0.7, alignItems: "center" }}
          onPress={() => {}}
        >
          <Text style={styles.hot5Title}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", flex: 0.2, alignItems: "center" }}
          onPress={() => {
            console.log("Like");
          }}
        >
          <HeartIcon length="14px" color="gray" />
          <Text style={styles.more}>{like}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    color: "#000",
    fontSize: "24px",
    fontWeight: "bold",
    alignSelf: "center",
    padding: "10px",
    flex: 0.6,
    textAlign: "center",
  },
  more: {
    color: "#b0b0b0",
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
    flex: 0.2,
  },
  text: {
    color: "#000",
    fontSize: "20px",
    alignSelf: "flex-start",
    padding: "10px",
  },
  hot5Title: {
    color: "#000",
    fontSize: "14px",
    alignSelf: "flex-start",
    textAlign: "center",
    padding: "10px",
  },
});
