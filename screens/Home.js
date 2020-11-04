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
import Recommand from "../components/Recommand";
import Search from "../components/SearchInHome";
import Hot5 from "../components/HotCourse";

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
          <View style={styles.container}>
            <Text style={styles.baseText}>
              추천 코스
              <TouchableOpacity>
                <Text style={styles.innerText}>더보기</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.recommand}>
            <Recommand />
          </View>

          <ContainerCenter>
            <View style={styles.container}>
              <Search />
            </View>
            <View style={styles.container}>
              <Text style={styles.baseText}>인기코스 TOP 5</Text>
              <TouchableOpacity>
                <Text style={styles.innerText}>더보기</Text>
              </TouchableOpacity>
            </View>

            <Hot5 />
          </ContainerCenter>
        </ScrollView>
      </White>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    flexDirection: "row",
  },
  baseText: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  innerText: {
    color: "grey",
    fontSize: "10px",
    alignItems: "right",
  },
  recommand: {
    height: "50%",
    width: "90%",
    alignSelf: "center",
  },
});
