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
  RefreshControl,
} from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recommand from "./Recommand";
import Search from "./SearchInHome";
import Hot5 from "./HotCourse";

export default function Home() {
  const [refreshing, setRefreshing] = React.useState({ LIKE: true, REC: true });
  console.log(refreshing);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing({ LIKE: true, REC: true });
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: "#ffffff" }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing["LIKE"] && refreshing["REC"]}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.recommand}>
        <Recommand refreshing={refreshing} setRefreshing={setRefreshing} />
      </View>
      <View style={styles.container}>
        <Search />
        <Hot5 refreshing={refreshing} setRefreshing={setRefreshing} />
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
