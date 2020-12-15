import * as React from "react";
import { View, Text, Image, Dimensions, ImageBackground } from "react-native";
import * as theme from "../../assets/theme";
import HeartPinkImage from "../../assets/Heart(pink).png";

export default function PostTitle({ post }) {
  return (
    <Container>
      <ImageBackground source={{uri:post.courseImgUrl?post.courseImgUrl:null}} style={{flex:1, resizeMode:'cover'}}>
        <View style={{backgroundColor:'rgba(255,255,255, 0.85)'}}>
          <Row paddingTop={14} style={{ minHeight: 60 }}>
            <Text
              style={{
                paddingTop:14,
                fontSize: 30,
                color: "#777",
                fontWeight: "800",
                flex: 1,
              }}
            >
              {post.title}
            </Text>
            <IconContainer style={{ justifyContent: "right" }}>
              <Image
                style={{ width: 20, height: 20, marginTop: 2, marginRight: 5 }}
                source={HeartPinkImage}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: theme.PRIMARY_COLOR,
                  marginLeft: 3,
                  fontWeight: "300",
                }}
              >
                {post.likeNum}
              </Text>
            </IconContainer>
          </Row>
          <Row style={{ minHeight: 50 }}>
            <IconContainer style={{ flex: 8 }}>
              <View
                style={{
                  backgroundColor: "#f5f5f5",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                  borderRadius: 14,
                  width: 28,
                  height: 28,
                }}
              >
                <Image
                  style={{ width: 28, height: 28, borderRadius: 14 }}
                  source={{ uri: post.userImgUrl }}
                />
              </View>
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: 12,
                  marginLeft: 8,
                }}
              >
                {post.nickName} 댓글 {post.commentNum}
              </Text>
            </IconContainer>
            <IconContainer
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: theme.SECOND_TEXT_COLOR,
                  fontSize: 10,
                }}
              >
                {post.createdAt?.slice(0, 10)}
              </Text>
            </IconContainer>
          </Row>
        </View>
      </ImageBackground>
    </Container>
  );
}

const Container = ({ children, style }) => (
  <View
    style={{
      height: 150,
      width: Dimensions.get("window").width,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#e3e3e3",
      backgroundColor: "#f5f5f5",
      ...style,
    }}
  >
    {children}
  </View>
);

const Row = ({ children, style, flex, paddingTop, paddingBottom }) => (
  <View
    style={{
      flex: flex ? flex : 1,
      width: Dimensions.get("window").width,
      paddingLeft: 25,
      paddingRight: 25,
      flexDirection: "row",
      alignItems: "right",
      paddingTop,
      paddingBottom,
      ...style,
    }}
  >
    {children}
  </View>
);

const IconContainer = ({ children, style }) => (
  <View
    style={{
      marginRight: 20,
      flexDirection: "row",
      alignItems: "center",
      height: "100%",
      ...style,
    }}
  >
    {children}
  </View>
);
