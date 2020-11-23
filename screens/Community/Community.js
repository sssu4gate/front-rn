import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseList from "./CourseList";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Community({ navigation, route }) {
  console.log("in community");
  console.log(route.params?.initalScreen);
  return (
    <Stack.Navigator
      initialRouteName="CourseList"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      mode="modal"
    >
      <Stack.Screen name="CourseList" component={CourseList} />
      {/*<Stack.Screen name="CourseDetail" component={CourseDetail}/> */}
    </Stack.Navigator>
  );
}
