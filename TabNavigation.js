import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Community from "./Tabs/Community";
import Home from "./Tabs/Home";
import Myprofile from "./Tabs/Myprofile";
import Schedule from "./Tabs/Schedule";
import Write from "./Tabs/Write";


function CommunityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Community!</Text>
    </View>
  );
}

function HomeScreen() {
  return <Home />;
}

function MyprofileScreen() {
  return <Myprofile />;
}

function ScheduleScreen() {
  return <Schedule />;
}

function WriteScreen() {
  return <Write />;
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Myprofile" component={MyprofileScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Write" component={WriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}