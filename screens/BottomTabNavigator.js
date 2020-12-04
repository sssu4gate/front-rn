import * as React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "./Community/Community";
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import Schedule from "./Schedule/Schedule";
import Write from "./Write/Write";
import * as theme from "../assets/theme";
import LoadingSVG from "../assets/Loading";
import { setRefresh } from "../reducers/refreshReducer";

/* 
 Navigation Theme Reference 
 https://reactnavigation.org/docs/themes/
*/

const Tab = createBottomTabNavigator();

function BottomTabNavigator({ route, navigation, user, refresh, setRefresh }) {
  React.useEffect(() => {
    if (user.isSigned == "unsigned") {
      navigation.navigate("Login");
    }
  }, [user]);

  return user.isSigned == "signed" ? (
    <Tab.Navigator
      keyboardHidesTabBar={true}
      initialRouteName="Home"
      activeColor={theme.PRIMARY_COLOR}
      inactiveColor="#777"
      barStyle={{
        backgroundColor: "#fff",
      }}
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
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
          } else if (route.name === "Community") {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/Heart(pink).png")
                    : require("../assets/Heart(gray).png")
                }
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            );
          } else if (route.name === "Write") {
            return (
              <Image
                source={require("../assets/Write.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            );
          } else if (route.name === "Schedule") {
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
          } else if (route.name === "MyProfile") {
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
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "홈" }}
        listeners={{
          tabPress: (e) => {
            setRefresh({
              ...refresh,
              currentTab: "Home",
              Home: refresh.currentTab == "Home",
            });
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ tabBarLabel: "커뮤니티" }}
        listeners={{
          tabPress: (e) => {
            setRefresh({
              ...refresh,
              currentTab: "Community",
              Community: refresh.currentTab == "Community",
            });
          },
        }}
      />
      <Tab.Screen
        name="Write"
        component={Write}
        options={{ tabBarLabel: "" }}
        tabBarAccessibilityLabel
        listeners={{
          tabPress: (e) => {
            setRefresh({
              ...refresh,
              currentTab: "Write",
            });
          },
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{ tabBarLabel: "일정" }}
        listeners={{
          tabPress: (e) => {
            setRefresh({
              ...refresh,
              currentTab: "Schedule",
            });
          },
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ tabBarLabel: "내 정보" }}
        listeners={{
          tabPress: (e) => {
            setRefresh({
              ...refresh,
              currentTab: "MyProfile",
              MyProfile: refresh.currentTab == "MyProfile",
            });
          },
        }}
      />
    </Tab.Navigator>
  ) : (
    <View style={{ alignItems: "center", marginTop: 20, flex: 1 }}>
      <LoadingSVG width={80} height={80} />
    </View>
  );
}

export default connect(
  (state) => ({
    user: state.user,
    refresh: state.refresh,
  }),
  { setRefresh }
)(BottomTabNavigator);
