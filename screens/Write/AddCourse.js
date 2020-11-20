import * as React from "react";
import { Text, ScrollView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {connect} from "react-redux";
import styled from "styled-components/native";
import Search from "../../components/Search";
import {fetchLocation, initLocation} from "../../reducers/locationReducer";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const CourseList = styled.View`
  flex-direction: row;
  width: 100vw;
  height: 50px;
  background-color: #f5f5f5;
  padding: 15px 20px;
`;

function CourseItem({ imgURL, text, handler }) {
  return (
    <View>
      <Image />
      <Text></Text>
      <DeleteButton></DeleteButton>
    </View>
  );
}

function AddCourse({locationList, error, loading, fetchLocation, initLocation}) {
  React.useEffect(()=>{
    fetchLocation("keyword");
  }, []); 
  console.log(locationList, error, loading);
  return (
    <Container>
      <Search></Search>
      <CourseList>
        <ScrollView
          style={{ color: "#f87996", fontSize: 14 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingStart: 5,
            paddingEnd: 5,
          }}
        ></ScrollView>
      </CourseList>
      <FlatList />
    </Container>
  );
}

export default connect(
  state=>({locationList: state.location.locationList, error:state.location.error, loading:state.location.loading}),
  {fetchLocation, initLocation}
)(AddCourse);
