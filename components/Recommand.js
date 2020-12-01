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
  Dimensions,
} from "react-native";
import { useNavigation, CommonActions, TabActions } from "@react-navigation/native";
import {moveCommunityTab, moveCommunityPost} from "../reducers/communityReducer";
import {connect} from "react-redux";
import Carousel from "react-native-snap-carousel";
import { scrollInterpolator, animatedStyles } from "./animations";

function Recommand({moveCommunityTab, moveCommunityPost}) {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 5);

  var imgList = [
    {
      uri: require("../assets/아이유1.jpg"),
      text: "도심속 한적한 아이유",
      like: 11,
      ITEM_HEIGHT: ITEM_HEIGHT,
      ITEM_WIDTH: ITEM_WIDTH,
    },
    {
      uri: require("../assets/아이유2.jpg"),
      text: "test2",
      like: 22,
      ITEM_HEIGHT: ITEM_HEIGHT,
      ITEM_WIDTH: ITEM_WIDTH,
    },
    {
      uri: require("../assets/아이유3.jpg"),
      text: "test3",
      like: 22,
      ITEM_HEIGHT: ITEM_HEIGHT,
      ITEM_WIDTH: ITEM_WIDTH,
    },
    {
      uri: require("../assets/아이유4.jpg"),
      text: "test4",
      like: 22,
      ITEM_HEIGHT: ITEM_HEIGHT,
      ITEM_WIDTH: ITEM_WIDTH,
    },
  ];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignSelf: "center",
          marginBottom: -40,
        }}
      >
        <Text style={{ flex: 0.2 }}> </Text>
        <Text style={styles.title}>추천코스</Text>
        <TouchableOpacity
          style={styles.more}
          onPress={() => {
            moveCommunityTab("Loco");
            navigation.navigate("Community");
          }}
        >
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={imgList}
        renderItem={_lenderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex({ index })}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
}

export default connect(
  state=>({}),
  {moveCommunityTab, moveCommunityPost}
)(Recommand);

function _lenderItem({ item, index }) {

  return (
    <View>
      <ImgList
        uri={item.uri}
        like={item.like}
        ITEM_WIDTH={item.ITEM_WIDTH}
        ITEM_HEIGHT={item.ITEM_HEIGHT}
      />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

function ImgList({ uri, like, ITEM_WIDTH, ITEM_HEIGHT }) {
  return (
    <View
      style={{
        width: "100%",
        height: ITEM_HEIGHT,
      }}
    >
      <Image
        source={uri}
        style={{
          width: "90%",
          height: "90%",
          alignSelf: "center",
          borderRadius: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  carouselContainer: {
    marginTop: 50,
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
