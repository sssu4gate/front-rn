import * as React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from "react-native";
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
      width: Dimensions.get('window').width,
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
      width: Dimensions.get('window').width,
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
            fontWeight: "800",
            flex: 1,
          }}
        >
          {post.title}
        </Text>
        <IconContainer style={{ justifyContent: "right", alignItems: "right" }}>
          <Image
            style={{ width: 20, height: 20, marginTop: 2, marginRight: 5 }}
            source={HeartPinkImage }
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
          <View
            style={{
              backgroundColor:"#f5f5f5",
              shadowColor: "#000",
              shadowOffset: {
                width: 1,
                height: 1,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3,
              elevation: 5,
              borderRadius: "50%",
              width: 28,
              height: 28,
            }}
          >
            <Image 
              style={{}}
            />
          </View>
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
