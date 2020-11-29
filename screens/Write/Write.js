import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WriteCourse from "./WriteCourse";
import AddCourse from "./AddCourse";

const Stack = createStackNavigator();

export default function Write({ navigation, route, option, setOption}) {
  return (
    <Stack.Navigator
      initialRouteName="InitialWrite"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      mode="modal"
    >
      <Stack.Screen name="InitialWrite" component={WriteCourse} initialParams={{editMode:true}}/> 
      <Stack.Screen name="AddCourse" component={AddCourse}/>
    </Stack.Navigator>
  );
} 
