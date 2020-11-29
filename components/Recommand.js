import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, TabActions } from "@react-navigation/native";

export default function Recommand() {
  const navigation = useNavigation();
  var imgList = [
    {
      uri: "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg",
      text: "도심속 한적한 아이유",
      like: 11,
    },
    {
      uri: "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg",
      text: "test2",
      like: 22,
    },
  ];
  var id = 0;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Text style={{ flex: 0.2 }}> </Text>
        <Text style={styles.title}>추천코스</Text>
        <TouchableOpacity
          style={styles.more}
          onPress={() => {
            navigation.navigate("Community", { screen: "Loco" });
          }}
        >
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView horizontal={true}>
        {imgList.map((imgList) => {
          return (
            <ImgList
              key={id++}
              uri={imgList.uri}
              text={imgList.text}
              like={imgList.like}
            />
          );
        })}
      </ScrollView> */}
    </>
  );
}

function ImgList({ uri, text, like }) {
  return (
    <View style={styles.slide}>
      <Image
        source={uri}
        style={{
          width: "80%",
          height: "80%",
          alignSelf: "center",
          borderRadius: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ flex: 0.2 }}></Text>
        <Text style={styles.text}>{text}</Text>
        <View
          style={{
            alignSelf: "center",
            padding: 3,
            flexDirection: "row",
            alignItems: "center",
            flex: 0.2,
          }}
        >
          <Image
            source={require("../assets/Heart(gray).png")}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.more}>{like}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "white",
    alignSelf: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    padding: 10,
    flex: 0.6,
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
    flex: 0.6,
    textAlign: "center",
  },
  more: {
    color: "#b0b0b0",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    flex: 0.2,
  },
});
