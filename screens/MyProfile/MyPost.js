import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function MyPost() {
  const dummy = [
    {
      id: 1,
      imgUri: require("../../assets/아이유1.jpg"),
      title: "title",
      like: 0,
    },
    {
      id: 2,
      imgUri: require("../../assets/아이유2.jpg"),
      title: "title2",
      like: 2,
    },
    {
      id: 3,
      imgUri: require("../../assets/아이유3.jpg"),
      title: "title3",
      like: 3,
    },
    {
      id: 4,
      imgUri: require("../../assets/아이유4.jpg"),
      title: "title3",
      like: 3,
    },
    {
      id: 5,
      imgUri: require("../../assets/아이유5.jpg"),
      title: "title4",
      like: 3,
    },
  ];
  return (
    <>
      <ScrollView style={{ backgroundColor: "#ffffff" }} alwaysBounceVertical>
        {dummy.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              imgUri={post.imgUri}
              title={post.title}
              like={post.like}
            />
          );
        })}
      </ScrollView>
    </>
  );
}

function Post({ id, imgUri, title, like }) {
  return (
    <>
      <TouchableOpacity style={styles.postArea}>
        <Image source={{ uri: imgUri }} style={styles.img} />
        <View style={styles.titleLine}>
          <Text style={{ flex: 0.2 }} />
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.like}>
            <Image style={{width:24, height:24}} source={{uri: require("../../assets/Heart(pink).png")}} />
            <Text>{like}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  postArea: {
    padding: 5,
    alignContent: "center",
    textAlign: "center",
  },
  img: {
    width: 320,
    height: 120,
    borderRadius: 20,
    alignSelf: "center",
  },
  titleLine: {
    flexDirection: "row",
  },
  like: {
    flexDirection: "row",
    flex: 0.2,
  },
  titleText: {
    flex: 1,
  },
});
