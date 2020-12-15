import * as React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import * as theme from "../../assets/theme";

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
      alignItems: "flex-start",
      paddingTop,
      paddingBottom,
      ...style,
    }}
  >
    {children}
  </View>
);

const IconContainer = ({ children, style, onPress }) => (
  <TouchableOpacity
    style={{
      marginRight: 20,
      flexDirection: "row",
      alignItems: "center",
      height: "100%",
      ...style,
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

function CourseTitle({ course, setCalendarVisible, title, setTitle, imgData, setImgData }) {
  return (
    <Container>
      <ImageBackground source={{uri:imgData?.uri?imgData.uri:null}} style={{flex:1, resizeMode:'cover'}}>
        <View style={{backgroundColor:'rgba(255,255,255, 0.8)'}}>
          <Row flex={5.5} paddingTop={14}>
            <TextInput
              autoFocus
              placeholder="코스 제목"
              placeholderTextColor="#aaa"
              style={{
                fontSize: 40,
                color: "#777",
                fontWeight: "800",
                flex: 1,
              }}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Row>
          <Row flex={4.5}>
            <IconContainer
              style={{ justifycontent: "flex-start" }}
              onPress={() => setCalendarVisible(true)}
            >
              <Image
                style={{ width: 14, height: 14 }}
                source={require("../../assets/Calendar.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: theme.SECOND_TEXT_COLOR,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                {course.date ? course.date : "미정"}
              </Text>
            </IconContainer>
            <IconContainer style={{ justifycontent: "flex-start" }} onPress={async ()=>{
              const result = await ImagePicker.launchImageLibraryAsync({quality:0.5});
              if (result.cancelled) {
                return;
              }
              const localUri = result.uri;
              const filename=localUri.split('/').pop();
              const match = /\.(\w+)$/.exec(filename);
              const type = match ? `image/${match[1]}` : `image`;
              setImgData({ uri: localUri, name: filename, type }); 
            }}>
              <Image
                style={{ width: 14, height: 14 }}
                source={require("../../assets/Photo.png")}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: theme.SECOND_TEXT_COLOR,
                  fontWeight: "bold",
                  marginLeft: 5,
                }}
              >
                사진 변경
              </Text>
            </IconContainer>
          </Row>
        </View>
      </ImageBackground>
    </Container>
  );
}
export default connect(
  (state) => ({
    course: state.course.course,
  }),
  {}
)(CourseTitle);
