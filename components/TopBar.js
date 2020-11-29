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
  CommonActions,
  useNavigation,
} from "@react-navigation/native";
import {connect} from 'react-redux';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import * as theme from "../assets/theme";
import BackWhiteImage from "../assets/back(white).png";
import MenuBlackImage from "../assets/menu(black).png";
import {setOption, initOption} from "../reducers/topBarReducer";

function TopBar({route, option, setOption, initOption}) {
  React.useEffect(()=>{
    console.log(route);
    if(route.state?.index==2){
      let leftButton="none";
      if(route.state.routes[2].state?.index==1) leftButton="back";
      setOption({...option, backgroundColor:theme.PRIMARY_COLOR, titleColor:"#fff", leftButton})
    }
    else if(route.state?.index==1){
      if(
        route.state.routes[1].state?.index==1 || 
        (!route.state.routes[1].state && route.state.routes[1].params?.screen=='PostDetail')
      ){
        setOption({...option, backgroundColor:theme.PRIMARY_COLOR, titleColor:"#fff", leftButton:"back" });
      } else {
        if(option.nested) initOption();

      }
    } else {
      if(option.nested) initOption();
    }
  }, [route])

  const navigation = useNavigation();
  const buttonHandlerMap={
    "menu": ()=>navigation.dispatch(DrawerActions.toggleDrawer()),
    "back": ()=>navigation.dispatch(StackActions.pop()),
    "none": ()=>null,
  };

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
        onPress={option.buttonHandler?option.buttonHandler:buttonHandlerMap[option.leftButton]}
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
export default connect(
  state=>({
    option:state.topBar
  }),
  {setOption, initOption}
)(TopBar);
