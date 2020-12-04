import * as React from "react";
import { View, ScrollView, StyleSheet, RefreshControl } from "react-native";
import Recommand from "./Recommand";
import Search from "./SearchInHome";
import Hot5 from "./HotCourse";

import { connect } from "react-redux";
import { setRefresh } from "../../reducers/refreshReducer";

function Home({ navigation, refresh, setRefresh }) {
  const [hotRefreshing, setHotRefreshing] = React.useState(true);
  const [recRefreshing, setRecRefreshing] = React.useState(true);
  const onRefresh = React.useCallback(() => {
    setHotRefreshing(true);
    setRecRefreshing(true);
  }, []);

  React.useEffect(() => {
    if (refresh.Home) {
      setRefresh({
        ...refresh,
        Home: false,
      });
      if (!hotRefreshing) setHotRefreshing(true);
      if (!recRefreshing) setRecRefreshing(true);
    }
  }, [refresh.Home]);

  return (
    <ScrollView
      style={{ backgroundColor: "#ffffff" }}
      refreshControl={
        <RefreshControl
          refreshing={hotRefreshing && recRefreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.recommand}>
        <Recommand
          refreshing={hotRefreshing}
          setRefreshing={setHotRefreshing}
        />
      </View>
      <View style={styles.container}>
        <Search />
        <Hot5 refreshing={recRefreshing} setRefreshing={setRecRefreshing} />
      </View>
    </ScrollView>
  );
}

export default connect((state) => ({ refresh: state.refresh }), { setRefresh })(
  Home
);

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
