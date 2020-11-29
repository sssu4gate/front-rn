import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, StackActions } from "@react-navigation/native";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

const Stack = createStackNavigator();

export default function Community({ navigation, route }) {
  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      mode="modal"
    >
      <Stack.Screen name="PostList" component={PostList} initialParams={{screen:route.params?.screen}}/>
      <Stack.Screen name="PostDetail" component={PostDetail} initialParams={{id:route.params?.id}}/>
    </Stack.Navigator>
  );
}
