import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
import { connect } from "react-redux";
import * as theme from "../assets/theme";
import {
  handleUserRequest,
  requestLoginUser,
  requestSignupUser,
  requestNamechkUser,
  requestCheckLoginedUser,
  setUser,
} from "../reducers/userReducer";
import Settings from "../screens/MyProfile/Settings";

const Stack = createStackNavigator();

const SwitchLogin = ({ navigation }) => (
  <>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: theme.PRIMARY_COLOR,
          fontSize: 64,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Love
      </Text>
      <Text
        style={{
          color: theme.PRIMARY_COLOR,
          fontSize: 64,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Course
      </Text>
    </View>
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("OAuthLogin", {
            uri:
              "https://kauth.kakao.com/oauth/authorize?client_id=a47427f9664fadae2991e7368df1f9b1&redirect_uri=https://capstone-4gate.herokuapp.com/auth/kakao/login&response_type=code&auth_type=reauthenticate",
          })
        }
        style={{
          alignItems: "center",
          flexDirection: "row",
          height: 50,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 20,
          borderRadius: 20,
          backgroundColor: "#FFDB43",
        }}
      >
        <Image
          style={{ marginLeft: 15, width: 35, height: 35 }}
          source={require("../assets/KakaoLogin.png")}
        />
        <Text style={{ fontSize: 20, textAlign: "center", flex: 1 }}>
          카카오 로그인
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          flexDirection: "row",
          height: 50,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 80,
          borderRadius: 20,
          backgroundColor: "#fff",
        }}
      >
        <Image
          style={{ marginLeft: 15, width: 35, height: 35 }}
          source={require("../assets/GoogleLogin.png")}
        />
        <Text style={{ fontSize: 20, textAlign: "center", flex: 1 }}>
          구글 로그인
        </Text>
      </TouchableOpacity>
    </View>
  </>
);

const OAuthLogin = connect((state) => ({}), { requestLoginUser })(
  ({ route: { params }, navigation, requestLoginUser }) => {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <WebView
          onNavigationStateChange={({ url, loading }) => {
            if (
              url.indexOf(
                "https://capstone-4gate.herokuapp.com/auth/kakao/login"
              ) == 0 &&
              loading
            )
              navigation.navigate("Settings");
          }}
          injectedJavaScript={`(function() {
            if(window.document.body.innerText.indexOf('access_token')==2)
              window.ReactNativeWebView.postMessage(window.document.body.innerText);
        })();`}
          onMessage={(data) => {
            const bodyData = JSON.parse(data.nativeEvent.data);
            if (bodyData?.access_token) {
              requestLoginUser({
                accessToken: bodyData.access_token,
                refreshToken: bodyData.refresh_token,
              });
            }
          }}
          source={{ uri: params?.uri }}
        />
      </View>
    );
  }
);

const Signup = connect(
  (state) => ({
    user: state.user,
  }),
  { requestSignupUser, requestNamechkUser, setUser }
)(
  ({
    navigation,
    route,
    user,
    requestSignupUser,
    requestNamechkUser,
    setUser,
  }) => {
    // save info when signup success
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {user.id == 0 ? (
          <View>
            <Text>loading</Text>
          </View>
        ) : (
          <View>
            <Image
              source={{ uri: user.profileImageUrl }}
              style={{ width: 100, height: 100 }}
            />
            <Text>nickName</Text>
            <TextInput
              value={user.nickName}
              style={{
                color: user.nameChecked ? "green" : "red",
                borderWidth: 1,
                borderColor: "#aaa",
                padding: 10,
              }}
              onChangeText={(text) =>
                setUser({ ...user, nickName: text, nameChecked: false })
              }
            />
            <TouchableOpacity
              onPress={() =>
                !user.nameChecked && requestNamechkUser(user.nickName)
              }
              style={{ backgroundColor: theme.PRIMARY_COLOR, padding: 20 }}
            >
              <Text style={{ fontSize: 20 }}>닉네임 중복확인</Text>
            </TouchableOpacity>
            <Text>birth</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#aaa", padding: 10 }}
              value={user.birth}
              onChangeText={(text) => setUser({ ...user, birth: text })}
            />
            <Text>gender</Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: "#aaa", padding: 10 }}
              value={user.gender}
              onChangeText={(text) => setUser({ ...user, gender: text })}
            />
            <TouchableOpacity
              onPress={() => {
                if (user.nameChecked == false)
                  return Alert.alert("닉네임", "닉네임 중복체크 해주세요.");
                else if (user.birth == "")
                  return Alert.alert("생일", "생일을 입력 해주세요.");
                else if (user.gender == "")
                  return Alert.alert("성별", "성별을 입력 해주세요.");
                requestSignupUser(user);
              }}
              style={{ backgroundColor: theme.PRIMARY_COLOR, padding: 20 }}
            >
              <Text style={{ fontSize: 20 }}>회원가입</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
);

export default connect(
  (state) => ({
    user: state.user,
  }),
  { requestCheckLoginedUser }
)(function Login({ navigation, route, user, requestCheckLoginedUser }) {
  React.useEffect(() => {
    requestCheckLoginedUser();
  }, []);
  React.useEffect(() => {
    console.log("Login", user);
    navigation.navigate("BottomTabNavigator");
    if (user.isSigned == "signed") {
      navigation.navigate("BottomTabNavigator");
    }
  }, [user]);
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
        mode="modal"
      >
        <Stack.Screen name="SwitchLogin" component={SwitchLogin} />
        <Stack.Screen name="OAuthLogin" component={OAuthLogin} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
