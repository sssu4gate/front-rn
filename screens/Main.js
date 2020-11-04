import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "./Community";
import Home from "./Home";
import Myprofile from "./Myprofile";
import Schedule from "./Schedule";
import Write from "./Write";
import CourseAdd from "./CourseAdd";
import TopBar from "../components/TopBar";
import HomeIcon from "../assets/images/home"
import Calendar from "../assets/images/Calendar"
import Group from "../assets/images/group"
import MyPage from "../assets/images/myPage"
import Edit from "../assets/images/edit"

/* 
 Navigation Theme Reference 
 https://reactnavigation.org/docs/themes/
*/

const Tab = createBottomTabNavigator();

export default function Main() {
    
  return (
    <>
      {/* Top Navigator */}
      <TopBar />

        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return (
                focused
                ? <HomeIcon length="20"/>
                : <HomeIcon color="#000" length="20"/>
              );
            } else if (route.name === 'Community') {
              return (
                focused
                ? <Group length="30"/>
                : <Group length="30" color="#000"/>
              );
            } else if (route.name === 'Write') {
              showLabel: false;
              return (
                <Edit length="40"/>
              );
            } else if (route.name === 'Schedule') {
              return (
                focused
                ? <Calendar length="20"/>
                : <Calendar length="20" color="#000"/>
              );
            } else if (route.name === 'Myprofile') {
              return (
                focused
                ? <MyPage length="20"/>
                : <MyPage length="20" color="#000"/>
              );
            }
            // You can return any component that you like here!
            
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF6DA0",
          inactiveTintColor: "blcak",
        }}
        >
          
          <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"홈"}} />
          <Tab.Screen name="Community" component={Community} options={{tabBarLabel:"커뮤니티"}} />
          <Tab.Screen name="Write" component={Write} options={{tabBarLabel:""}} />
          <Tab.Screen name="Schedule" component={Schedule} options={{tabBarLabel:"일정"}} />
          <Tab.Screen name="Myprofile" component={Myprofile} options={{tabBarLabel:"내 정보"}} />
        </Tab.Navigator>
    </>
  );
}
