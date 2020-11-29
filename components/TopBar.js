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
  useNavigation,
} from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as theme from "../assets/theme";
import BackWhiteImage from "../assets/back(white).png";
import MenuBlackImage from "../assets/menu(black).png";

export default function TopBar({route}) {
  const navigation = useNavigation();
  const buttonHandlerMap={
    "menu": ()=>navigation.dispatch(DrawerActions.toggleDrawer()),
    "back": ()=>navigation.dispatch(StackActions.pop()),
    "none": ()=>null,
  };

  const defaultOption={
    backgroundColor:"#fff",
    titleColor: theme.PRIMARY_COLOR,
    leftButton:"menu",
  };

  let option={...defaultOption};
  if(route.state?.index==2){
    let leftButton="none";
    if(route.state.routes[route.state.index].state?.index==1) 
      leftButton="back";
    option={...option, backgroundColor:theme.PRIMARY_COLOR, titleColor:"#fff", leftButton}
  }
  else if(route.state?.index==1){
    if(route.state.routes[route.state.index].params?.screen=="PostDetail")
      option={...option, backgroundColor:theme.PRIMARY_COLOR, titleColor:"#fff", leftButton:"back"}
  } else {
    option={...defaultOption};
  }

  return (
    <View style={{
      height: 40,
      flexDirection: "row", // row
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "space-between", // center, space-around
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor:option.backgroundColor
    }}>
      <TouchableOpacity
        style={{width:30, height:30, justifyContent:"center", alignItems:"center"}}
        onPress={buttonHandlerMap[option.leftButton]}
      >
      {
        option.leftButton=="menu"?
          <Image style={{width:20, height:20}} source={{uri: MenuBlackImage}}/>
          :(
          option.leftButton=="back"?
            <Image style={{width: 20, height: 20}} source={{uri: BackWhiteImage}}/>
            :
            <View style={{width:30, height:30}}/>
          )
          
      }
      </TouchableOpacity>
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{textAlign:"center", fontSize:28, color:option.titleColor, fontWeight:"bold", fontStyle:"italic" }}>LoCo</Text>
        </TouchableOpacity>
      </View>
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
