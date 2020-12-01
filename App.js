import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import {
  NavigationContainer,
  DefaultTheme,
  DrawerActions,
  TabActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LocaleConfig } from "react-native-calendars";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as theme from "./assets/theme";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabNavigator from "./screens/BottomTabNavigator";
import Settings from "./screens/MyProfile/SetProfile";
import Login from "./screens/Login";
import initStore from "./store";
import TopBar from "./components/TopBar";

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
const Drawer = createDrawerNavigator();
const store = initStore();
// { headerTitle: props => <TopBar {...props, route} />}

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={Theme}>
          <Drawer.Navigator
            mode={"modal"}
            initialRouteName="Login"
            drawerContent={(props) => {
              return <CustomDrawerContent {...props} />;
            }}
          >
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
              options={({ route }) => ({
                header: (props) => <TopBar {...props} route={route} />,
                headerStyle: {
                  backgroundColor: "#f4511e",
                  height: 40,
                },
              })}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>설정</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
            style={{ justifyContent: "center" }}
          >
            <Image source={require("./assets/xBtn.png")} style={styles.btn} />
          </TouchableOpacity>
        </View>

        <DrawerItem
          label="계정 설정"
          onPress={() =>
            props.navigation.dispatch(
              TabActions.jumpTo("MyProfile", { screen: "SetProfile" })
            )
          }
          style={styles.borderLine}
        />
        <View />
        <DrawerItem
          label="앱정보"
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
          style={styles.borderLine}
        />
        <DrawerItem
          label="도움말"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
          style={styles.borderLine}
        />
        <DrawerItem
          label="문의 하기"
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    padding: 12,
    color: "#777777",
    flex: 0.9,
  },
  btn: {
    width: 30,
    height: 30,
    alignSelf: "center",
    padding: 10,
    flex: 0.1,
  },
  borderLine: {
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderRadius: 0,
  },
  header: {
    backgroundColor: "#888888",
  },
  container: {
    flex: 1,
  },
});
