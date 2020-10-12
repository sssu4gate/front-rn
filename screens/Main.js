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
            } else if (route.name === 'Community') {
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
            } else if (route.name === 'Write') {
              showLabel: false;
              return (
                <Image 
                source={require("../assets/Write.png")}
                style={{
                width: 40,
                height: 40,
                bottom:0,
              }}
                />
              );
            } else if (route.name === 'Schedule') {
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
            } else if (route.name === 'Myprofile') {
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
