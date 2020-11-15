import * as React from "react";
import { Text, View, Image } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Community from "./Community/Community";
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import Schedule from "./Schedule/Schedule";
import Write from "./Write/Write";
import HomeIcon from "../assets/images/home";
import Calendar from "../assets/images/Calendar";
import Group from "../assets/images/group";
import MyPage from "../assets/images/myPage";
import Edit from "../assets/images/edit";
import * as theme from '../assets/theme';

/* 
 Navigation Theme Reference 
 https://reactnavigation.org/docs/themes/
*/

const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={theme.PRIMARY_COLOR}
        inactiveColor="#777"
        barStyle={{ backgroundColor: '#fff' }}
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
              showLabel: false;
              return (
                <Image
                  source={require("../assets/Write.png")}
                  style={{
                    width: 40,
                    height: 40,
                    bottom: 0,
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