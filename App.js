import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LocaleConfig } from "react-native-calendars";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import * as theme from "./assets/theme";
import BottomTabNavigator from "./screens/BottomTabNavigator";
import initStore from "./store";


/* 
 Navigation Theme Reference 
 https://reactnavigation.org/docs/themes/
*/

LocaleConfig.locales["kr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ],
  dayNamesShort: ["월", "화", "수", "목", "금", "토", "일"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "kr";


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
      <SafeAreaProvider>
        <NavigationContainer theme={Theme}>
          <Stack.Navigator initialRouteName="BottomTabNavigator">
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{title:'LoCo'}} />
            {/* <Stack.Screen name="Kakao" component={Kakao} options={{headerShown:false}} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
