import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "./Community";
import Home from "./Home";
import Myprofile from "./Myprofile";
import Schedule from "./Schedule";
import Write from "./Write";
import * as theme from "../assets/theme";

import CourseAdd from "./CourseAdd";

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
        <Tab.Navigator>
          <Tab.Screen name="Write" component={Write} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Community" component={Community} />
          {/* <Tab.Screen name="Write" component={Write} /> */}
          <Tab.Screen name="Schedule" component={Schedule} />
          <Tab.Screen name="Myprofile" component={Myprofile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
