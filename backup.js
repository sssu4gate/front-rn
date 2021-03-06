import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from "./Community/Community";
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import Schedule from "./Schedule/Schedule";
import Write from "./Write/Write";
import * as theme from "../assets/theme";

/* 
 Navigation Theme Reference 
 https://reactnavigation.org/docs/themes/
*/

const Tab = createBottomTabNavigator();

export default function Main({route, navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.PRIMARY_COLOR}
      inactiveColor="#777"
      barStyle={{
        backgroundColor: "#fff",
      }}
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
                    ? require("../assets/Community(p).png")
                    : require("../assets/Community.png")
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
                    ? require("../assets/MyProfile(p).png")
                    : require("../assets/MyProfile.png")
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
  );
}
