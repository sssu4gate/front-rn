import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackActions, TabActions } from "@react-navigation/native";
import { connect } from "react-redux";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import { moveCommunitySuccess } from "../../reducers/communityReducer";

const Stack = createStackNavigator();

function Community({
  navigation,
  route,
  moved,
  tab,
  id,
  moveCommunitySuccess,
}) {
  React.useEffect(() => {
    if (!moved) {
      navigation.dispatch(TabActions.jumpTo(tab));
      if (id) {
        navigation.dispatch(StackActions.push("PostDetail", { id }));
      }
      moveCommunitySuccess();
    }
  }, [tab, id, moved]);

  return (
    <Stack.Navigator
      initialRouteName="PostList"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      mode="modal"
    >
      <Stack.Screen
        name="PostList"
        component={PostList}
        initialParams={{ screen: tab }}
      />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
  );
}
export default connect(
  (state) => ({
    moved: state.community.moved,
    tab: state.community.tab,
    id: state.community.id,
  }),
  { moveCommunitySuccess }
)(Community);
