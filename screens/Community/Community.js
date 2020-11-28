import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {StackActions} from "@react-navigation/native";
import CourseList from "./CourseList";
import CourseDetail from "./CourseDetail";

const Stack = createStackNavigator();

//const Navigation=Stack({CourseList:<CourseList />})

export default function Community({ navigation, route }) {
  console.log(navigation, route);
  return (
    <Stack.Navigator
      initialRouteName="CourseList"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      mode="modal"
    >
      <Stack.Screen name="CourseList" component={CourseList} initialParams={{screen:route.params?.screen}}/>
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
}
