import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as theme from "../assets/theme";
import Main from "./Main";
import Menu from "./Menu";

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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      {/* Top Navigator */}
      <NavigationContainer theme={Theme}>
        <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen name="Main" component={Main} options={{headerShown:false}} />
          <Drawer.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
