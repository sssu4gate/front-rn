import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recommand from "../../components/Recommand";
import Search from "../../components/SearchInHome";
import Hot5 from "../../components/HotCourse";

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.recommand}>
        <Recommand />
      </View>
      <View style={styles.container}>
        <Search />
        <Hot5 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  innerText: {
    color: "grey",
    fontSize: 10,
    alignItems: "flex-end",
  },
  recommand: {
    height: "45%",
    width: "100%",
    alignSelf: "center",
    flex: 1,
  },
  hot: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
  },
});
