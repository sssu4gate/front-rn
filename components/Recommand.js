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
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import HeartIcon from "../assets/images/Heart";

export default function Recommand() {
  const navigation = useNavigation();
  var imgList = [
    "https://reactnative.dev/img/tiny_logo.png",
    "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg",
    "https://img7.yna.co.kr/etc/inner/KR/2020/01/03/AKR20200103136600005_01_i_P2.jpg",
    "https://post-phinf.pstatic.net/MjAxOTEyMDRfOSAg/MDAxNTc1NDI1MTg2MDE2.b1S1g-yhSiy6hxFJOoMsO7-PlMTc2iWAdznJ2xZwTxQg.3kTCo5pOPX6G3wtYR1AAYeGetDTkOXO2xTCM0SU4bNcg.JPEG/253-%EC%95%84%EC%9D%B4%EC%9C%A04.jpg?type=w1200",
  ];
  var imgList2 = [
    {
      uri:
        "https://img7.yna.co.kr/etc/inner/KR/2020/01/03/AKR20200103136600005_01_i_P2.jpg",
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
            navigation.navigate("Community", { initalScreen: "Loco" });
          }}
        >
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>

      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
      >
        {imgList2.map((imgList2) => {
          return (
            <ImgList
              key={id++}
              uri={imgList2.uri}
              text={imgList2.text}
              like={imgList2.like}
            />
          );
        })}
      </Swiper>
    </>
  );
}

function ImgList({ uri, text, like }) {
  return (
    <View style={styles.slide}>
      <Image
        source={{ uri: uri }}
        style={{
          width: "80%",
          height: "80%",
          alignSelf: "center",
          borderRadius: "20px",
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
            padding: "3px",
            flexDirection: "row",
            alignItems: "center",
            flex: 0.2,
          }}
        >
          <HeartIcon length="14px" color="gray" />
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
    fontSize: "16px",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    padding: "10px",
    flex: 0.6,
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
});
