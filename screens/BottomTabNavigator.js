import * as React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "./Community/Community";
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import Schedule from "./Schedule/Schedule";
import Write from "./Write/Write";
import * as theme from "../assets/theme";
import LoadingSVG from "../assets/Loading";

/* 
 Navigation Theme Reference 
 https://reactnavigation.org/docs/themes/
*/

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ route, navigation, user }) {
  React.useEffect(() => {
    if (user.isSigned == "unsigned") {
      navigation.navigate("Login");
    }
  }, [user]);

  return user.isSigned == "signed" ? (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.PRIMARY_COLOR}
      inactiveColor="#777"
      barStyle={{
        backgroundColor: "#fff",
      }}
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/Home(p).png")
                    : require("../assets/Home.png")
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          } else if (route.name === "Community") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/Heart(pink).png")
                    : require("../assets/Heart(gray).png")
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          } else if (route.name === "Write") {
            return (
              <Image
                source={require("../assets/Write.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            );
          } else if (route.name === "Schedule") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/Schedule(p).png")
                    : require("../assets/Schedule.png")
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          } else if (route.name === "MyProfile") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/Myprofile(p).png")
                    : require("../assets/Myprofile.png")
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "홈" }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ tabBarLabel: "커뮤니티" }}
      />
      <Tab.Screen
        name="Write"
        component={Write}
        options={{ tabBarLabel: "" }}
        tabBarAccessibilityLabel
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{ tabBarLabel: "일정" }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ tabBarLabel: "내 정보" }}
      />
    </Tab.Navigator>
  ) : (
    <View style={{ alignItems: "center", marginTop: 20, flex: 1 }}>
      <LoadingSVG width={80} height={80} />
    </View>
  );
}

export default connect(
  (state) => ({
    user: state.user,
  }),
  {}
)(BottomTabNavigator);
