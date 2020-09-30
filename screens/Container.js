import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "./Community";
import Home from "./Home";
import Myprofile from "./Myprofile";
import Schedule from "./Schedule";
import Write from "./Write";
import * as theme from "../assets/theme";

/* 
 Navigation Theme Reference 
   https://reactnavigation.org/docs/themes/
*/

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.PRIMARY_COLOR,
    text: "#777",
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      {/* Top Navigator */}
      <NavigationContainer theme={Theme}>
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
              return (
                <Image 
                source={require("../assets/Write.png")}
                style={{
                width: 40,
                height: 40,
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
          showLabel: false
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Community" component={Community} />
          <Tab.Screen name="Write" component={Write} />
          <Tab.Screen name="Schedule" component={Schedule} />
          <Tab.Screen name="Myprofile" component={Myprofile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
