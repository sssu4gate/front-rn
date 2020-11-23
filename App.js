import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import * as theme from "./assets/theme";
import BottomTabNavigator from "./screens/BottomTabNavigator";
import initStore from "./store";

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
const store = initStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator initialRouteName="BottomTabNavigator">
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ title: "LoCo" }}
            styles={styles.topbar}
          />
          {/* <Stack.Screen name="Kakao" component={Kakao} options={{headerShown:false}} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  topbar: {
    textAlign: "center",
  },
});
