import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation, TabActions } from "@react-navigation/native";
import { connect } from "react-redux";
import * as theme from "../../assets/theme";
import {
  loadSelectedPlace,
  selectPlace,
  initPlace,
} from "../../reducers/placeReducer";
import { setPost, initPost, requestSavePost } from "../../reducers/postReducer";

const Content = ({ children, style }) => (
  <View
    style={{
      flexDirection: "row",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      width: "100%",
      ...style,
    }}
  >
    {children}
  </View>
);

const Line = ({ children, style }) => (
  <View
    style={{
      marginLeft: 10,
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#e3e3e3",
      ...style,
    }}
  >
    {children}
  </View>
);

function PostContent({
  post,
  setPost,
  selectPlace,
  initPlace,
  loadSelectedPlace,
  selectedPlaces,
  initPost,
  requestSavePost,
  uploaded,
}) {
  const [text, setText] = React.useState("");
  const navigation = useNavigation();

  React.useEffect(() => {
    if (uploaded) {
      navigation.dispatch(
        TabActions.jumpTo("Community", { screen: "PostDetail" })
      );
      initPost();
      initPlace();
    }
  }, [uploaded]);

  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>코스</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <FlatList
          style={{ width: "100%", overflow: "visible" }}
          data={post.places}
          renderItem={({ item, index }) => {
            return (
              <PlaceItem
                key={index}
                price={item.cost}
                title={item.placeDto.place_name}
                index={index}
              />
            );
          }}
        />
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>본문</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <Text style={{ color: "#777", fontSize: 18, minHeight: 80 }}>
          {post.content}
        </Text>
      </Content>
      <Content>
        <FlatList
          style={{ width: "100%", overflow: "visible" }}
          data={post.tags}
          renderItem={({ item, index }) => {
            return <View />;
          }}
        />
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>댓글</Text>
        <Line />
      </Content>
    </View>
  );
}

function PlaceItem({ title, index, price, type }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        height: 40,
        borderRadius: 10,
        padding: 8,
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: 10,
          width: 20,
          height: 20,
          backgroundColor: theme.PRIMARY_COLOR,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>{index + 1}</Text>
      </View>
      <View
        style={{
          width: 1,
          height: 25,
          backgroundColor: "#e3e3e3",
          marginLeft: 7,
          marginRight: 7,
        }}
      />
      {/*<Image />*/}
      <Text style={{ color: "#3c3c3c", flex: 1 }}>{title}</Text>
      <View
        style={{
          borderRadius: 4,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Text style={{ color: "#3c3c3c" }}>₩ {price}</Text>
      </View>
    </View>
  );
}

export default connect(
  (state) => ({
    selectedPlaces: state.place.selectedPlaces,
    post: state.post.post,
    uploaded: state.post.uploaded,
  }),
  {
    loadSelectedPlace,
    selectPlace,
    initPlace,
    setPost,
    initPost,
    requestSavePost,
  }
)(PostContent);
