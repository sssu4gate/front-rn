import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileSummary from "./ProfileSummary";
import Settings from "./Settings";

const Stack = createStackNavigator();

export default function Myprofile() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileSummary"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      mode="modal"
    >
      <Stack.Screen name="ProfileSummary" component={ProfileSummary} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
