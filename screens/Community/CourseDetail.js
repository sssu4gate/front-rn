import * as React from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, View, Text, Button, TouchableOpacity, ScrollView} from "react-native";
import { Calendar} from "react-native-calendars";
import * as theme from "../../assets/theme";
import CourseContent from "../../components/CourseContent";
import CourseTitle from "../../components/CourseTitle";
import {requestLoadCourse} from "../../reducers/courseReducer";

import {connect} from "react-redux";

function CommunityDetail({id, course, loading, error, requestLoadCourse}) {
  console.log(id, course);

  React.useEffect(()=>{
    if(id)
      requestLoadCourse("", id);
  }, [id]);

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
        {/*
        <CourseTitle/>
        <CourseContent/>
        */}
      </ScrollView>
    </View>
  );
}
export default connect(
  state=>({
    course: state.course.course, 
    error:state.course.error, 
    loading:state.course.loading,
  }),
  {requestLoadCourse}
)(CommunityDetail)
