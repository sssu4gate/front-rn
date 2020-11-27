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
  useNavigation,
} from "@react-navigation/native";
import {StackActions} from "@react-navigation/native";
import TitleIcon from "../assets/images/Title";
import MenuIcon from "../assets/images/menu";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as theme from "../assets/theme";

function TopBar({route:{state}}) {
  const navigation = useNavigation();

  return (
    <View style={{
      height: 40,
      flexDirection: "row", // row
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between", // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor:state?.index==2?theme.PRIMARY_COLOR:"#fff"
    }}>
      <TouchableOpacity
        style={{width:30, height:30, justifyContent:"center", alignItems:"center"}}
        onPress={() => {
          navigation.navigate("Write", {screen:"InitialWrite"}, StackActions.pop());
        }}
      >
      {
        state?.index==2?(
          state.routes[state.index].state?.index>0?
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={{uri: require("../assets/back(white).png")}}
            />:
            <View style={{width:30, height:30}}/>
          ):
          <MenuIcon length="20" />
      }
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex:1}}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{textAlign:"center", fontSize:28, color:state?.index!=2?theme.PRIMARY_COLOR:"#fff", fontWeight:"bold", fontStyle:"italic" }}>LoCo</Text>
      </TouchableOpacity>
      <TouchableOpacity >
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

export default TopBar;
