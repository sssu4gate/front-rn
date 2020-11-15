import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as theme from "../assets/theme";
import BottomTabNavigator from "./BottomTabNavigator";

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


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="BottomTabNavigator">
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{title:'LoCo'}} />
          {/* <Stack.Screen name="Kakao" component={Kakao} options={{headerShown:false}} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}
