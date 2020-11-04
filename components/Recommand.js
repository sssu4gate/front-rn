import * as React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import Swiper from "react-native-swiper";

export default function Recommand() {
  var imgList = [
    "https://reactnative.dev/img/tiny_logo.png",
    "https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg",
    "https://img7.yna.co.kr/etc/inner/KR/2020/01/03/AKR20200103136600005_01_i_P2.jpg",
    "https://post-phinf.pstatic.net/MjAxOTEyMDRfOSAg/MDAxNTc1NDI1MTg2MDE2.b1S1g-yhSiy6hxFJOoMsO7-PlMTc2iWAdznJ2xZwTxQg.3kTCo5pOPX6G3wtYR1AAYeGetDTkOXO2xTCM0SU4bNcg.JPEG/253-%EC%95%84%EC%9D%B4%EC%9C%A04.jpg?type=w1200",
  ];
  var id = 0;

  return (
    <>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
      >
        {imgList.map((imgList) => {
          return <ImgList uri={imgList} key={id++} />;
        })}
      </Swiper>
    </>
  );
}

function ImgList({ uri }) {
  return (
    <View style={styles.slide}>
      <Image
        source={{ uri: uri }}
        style={{ width: "80%", height: "100%", alignSelf: "center" }}
      />
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
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
