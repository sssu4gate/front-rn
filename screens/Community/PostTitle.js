import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setPost } from "../../reducers/postReducer";
import * as theme from "../../assets/theme";
import PhotoImage from "../../assets/Photo.png";
import CalendarImage from "../../assets/Calendar.png";
import HeartPinkImage from "../../assets/Heart(pink).png";

const Container = ({ children, style }) => (
  <View
    style={{
      height: 100,
      width: "100vw",
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
      width: "100vw",
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
  <TouchableOpacity
    style={{
      marginRight: 20,
      flexDirection: "row",
      alignItems: "center",
      height: "100%",
      ...style,
    }}
  >
    {children}
  </TouchableOpacity>
);

const Profile = ({ children, style }) => (
  <Image
    style={{
      borderRadius: "50%",
      width: 28,
      height: 28,
      ...style,
    }}
  >
    {children}
  </Image>
);
function PostTitle({ editMode, post, setPost, setCalendarVisible }) {
  return (
    <Container>
      <Row paddingTop={14} style={{ maxHeight: 50 }}>
        <Text
          style={{
            fontSize: 28,
            color: "#777",
            fontWeight: "bolder",
            flex: 1,
          }}
        >
          {post.title}
        </Text>
        <IconContainer style={{ justifyContent: "right", alignItems: "right" }}>
          <Image
            style={{ width: 20, height: 20, marginTop: 2, marginRight: 5 }}
            source={{ uri: HeartPinkImage }}
          />
          <Text
            style={{
              fontSize: 20,
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
          <Image
            style={{
              boxShadow: "1px 1px 3px #00000040",
              borderRadius: "50%",
              width: 28,
              height: 28,
            }}
            source={{ uri: "" }}
          />
          <Text
            style={{
              color: theme.SECOND_TEXT_COLOR,
              fontSize: 12,
              marginLeft: 8,
            }}
          >
            {post.nickName} 조회 {post.viewCount}
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
    </Container>
  );
}
export default connect(
  (state) => ({
    post: state.post.post,
  }),
  { setPost }
)(PostTitle);
