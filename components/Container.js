import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "../screens/Community";
import Home from "../screens/Home";
import Myprofile from "../screens/Myprofile";
import Schedule from "../screens/Schedule";
import Write from "../screens/Write";
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
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Write" component={Write} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Myprofile" component={Myprofile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
