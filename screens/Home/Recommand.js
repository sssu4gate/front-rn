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
import {
  useNavigation,
  CommonActions,
  TabActions,
} from "@react-navigation/native";
import {
  moveCommunityTab,
  moveCommunityPost,
  requestPostListCommunity,
} from "../../reducers/communityReducer";
import { connect } from "react-redux";
import Carousel from "react-native-snap-carousel";
import {
  scrollInterpolator,
  animatedStyles,
} from "../../components/animations";
import LoadingSVG from "../../assets/Loading";

function Recommand({
  moveCommunityTab,
  moveCommunityPost,
  requestPostListCommunity,
  postList,
  token,
  refreshing,
  setRefreshing,
}) {
  React.useEffect(() => {
    if (refreshing) {
      setRefreshing(false);
      requestPostListCommunity(token, 1, 5, "LATEST");
    }
  }, [refreshing]);

  console.log("************8");
  console.log(postList);
  console.log("************8");

  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 5);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: -40,
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Text style={{ width: "20%" }}></Text>
        <Text style={styles.title}>추천코스</Text>
        <TouchableOpacity
          style={[styles.more, { width: "20%", padding: 10 }]}
          onPress={() => {
            moveCommunityTab("Loco");
            navigation.navigate("Community");
          }}
        >
          <Text style={styles.more}>더보기</Text>
        </TouchableOpacity>
      </View>
      {
        !postList["LATEST"].loading ? (
          <Carousel
            data={postList["LATEST"].postList.map(item=>({
              uri:item.courseImgUrl,
              text:item.title,
              like: item.likeNum,
              ITEM_HEIGHT,
              ITEM_WIDTH,
            }))}
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
        ):(
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <LoadingSVG width={80} height={80} />
          </View>
        )
      }
    </View>
  );
}

export default connect(
  (state) => (state) => ({
    postList: state.community.postList,
    token: state.user.accessToken,
  }),
  { moveCommunityTab, moveCommunityPost, requestPostListCommunity }
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
      <Text style={[styles.text, { margin: -10, marginTop: -15 }]}>
        {item.text}
      </Text>
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
        source={{uri:uri?uri:null}}
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
    width: "60%",
    textAlign: "center",
  },
  more: {
    color: "#b0b0b0",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
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
