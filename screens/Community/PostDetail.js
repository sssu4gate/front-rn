import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, View, Text, Button, TouchableOpacity, ScrollView} from "react-native";
import { Calendar} from "react-native-calendars";
import * as theme from "../../assets/theme";
import PostContent from "./PostContent";
import PostTitle from "./PostTitle";
import {requestLoadPost} from "../../reducers/postReducer";

import {connect} from "react-redux";

function PostDetail({navigation, route, loading, error, requestLoadPost}) {

  React.useEffect(()=>{
    if(route.params.id){
      requestLoadPost("", route.params.id);
    }
  }, [route.params.id]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        dropShadow: "1px 1px black"
      }}
    >
      <ScrollView>
        <PostTitle/>
        <PostContent/>
      </ScrollView>
    </View>
  );
}
export default connect(
  state=>({
    error:state.post.error, 
    loading:state.post.loading,
  }),
  {requestLoadPost}
)(PostDetail)
