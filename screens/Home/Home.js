import * as React from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useScrollToTop } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Recommand from "../../components/Recommand";
import Search from "../../components/SearchInHome";
import Hot5 from "../../components/HotCourse";

const ContainerCenter = styled.View`
  align-items: center;
`;
const White = styled.View`
  flex: 1;
  background: #fff;
`;
export default function Home() {
  const ref = React.useRef(null);

  useScrollToTop(ref);
  return (
    <>
      <White>
        <ScrollView>
          <View style={styles.recommand}>
            <Recommand />
          </View>
          <View style={styles.container}>
            <Search />
            <Hot5 />
          </View>
        </ScrollView>
      </White>
    </>
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
  },
  hot: {
    height: "50%",
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
  },
});
