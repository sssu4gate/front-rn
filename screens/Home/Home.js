import * as React from "react";
import { View, ScrollView, StyleSheet, RefreshControl } from "react-native";
import Recommand from "./Recommand";
import Search from "./SearchInHome";
import Hot5 from "./HotCourse";

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = React.useState({ LIKE: true, REC: true });
  const onRefresh = React.useCallback(() => {
    setRefreshing({ LIKE: true, REC: true });
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      console.log(e);
    });
    return unsubscribe;
  }, [navigation]);

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
  recommand: {
    width: "100%",
    alignSelf: "center",
    flex: 1,
  },
});
