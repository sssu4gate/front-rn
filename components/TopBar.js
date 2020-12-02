import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  NavigationContainer,
  DrawerActions,
  StackActions,
  TabActions,
} from "@react-navigation/native";
import { connect } from "react-redux";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as theme from "../assets/theme";
import BackWhiteImage from "../assets/back(white).png";
import MenuBlackImage from "../assets/menu(black).png";
import { setOption, initOption } from "../reducers/topBarReducer";

function TopBar({ option, setOption, initOption, navigation}) {
  const insets = useSafeAreaInsets();
  const route = navigation.dangerouslyGetState().routes[1];
  React.useEffect(() => {
    if (route.state?.index == 2) {
      let leftButton = "none";
      if (route.state.routes[2].state?.index == 1) leftButton = "back";
      setOption({
        ...option,
        backgroundColor: theme.PRIMARY_COLOR,
        titleColor: "#fff",
        leftButton,
      });
    } else if (route.state?.index == 1 && route.state.routes[1].state?.routes[route.state.routes[1].state?.index].name == 'PostDetail') {
      setOption({
        ...option,
        backgroundColor: theme.PRIMARY_COLOR,
        titleColor: "#fff",
        leftButton: "back",
      });
    } else {
      if (option.nested) initOption();
    }
  }, [route]);

  const buttonHandlerMap = {
    menu: () => navigation.dispatch(DrawerActions.toggleDrawer()),
    back: () => navigation.dispatch(StackActions.pop()),
    none: () => null,
  };

  return (
    <View
      style={{
        flexDirection: "row", // row
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-between", // center, space-around
        paddingTop:insets.top+5,
        paddingBottom:5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: option.backgroundColor,
      }}
    >
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={
          option.buttonHandler
            ? option.buttonHandler
            : buttonHandlerMap[option.leftButton]
        }
      >
        {option.leftButton == "menu" ? (
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/menu(black).png")}
          />
        ) : option.leftButton == "back" ? (
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/back(white).png")}
          />
        ) : (
          <View style={{ width: 20, height: 20 }} />
        )}
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              color: option.titleColor,
              fontWeight: "700",
              fontStyle: "italic",
            }}
          >
            LoCo
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
export default connect(
  (state) => ({
    option: state.topBar,
  }),
  { setOption, initOption }
)(TopBar);
