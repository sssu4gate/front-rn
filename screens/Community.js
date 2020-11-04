import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Popularity(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Popularity!</Text>
    </View>
  )
}

function Trend(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Trend!</Text>
    </View>
  )
}

function Loco(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text >Loco!</Text>
    </View>
  )
}


const Tab = createMaterialTopTabNavigator();

export default function Community(){
    return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintiColor : 'white',
            inactiveTintColor : 'white',
            indicatorStyle : {backgroundColor : 'white'},
            style: {backgroundColor : "#FF6DA0"}
          }}>           
            <Tab.Screen name="Popularity" component={Popularity}/>
            <Tab.Screen name="Trend" component={Trend}/>
            <Tab.Screen name="Loco" component={Loco}/>
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
  tab_text :{
    color : '#FFFFFF'
  }
});