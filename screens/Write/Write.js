import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WriteCourse from "./WriteCourse";
import AddCourse from "./AddCourse";

const Stack = createStackNavigator();

export default function Write({ navigation, route }) {
  const stackRef=React.createRef();

  console.log(navigation, route, stackRef);

  /*
  React.useLayoutEffect(()=>{
  }, [route.params?.screen])
  console.log(stackRef.current, stackRef.current?.push, stackRef.current?.navigate)
  */


  return (
    <Stack.Navigator
      ref={stackRef}
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


