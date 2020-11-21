import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {connect} from "react-redux";
import styled from "styled-components/native";
import Search from "../../components/Search";
import {fetchLocation, initLocation, selectLocation} from "../../reducers/locationReducer";
import * as theme from "../../assets/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
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

function AddCourse({locations, error, loading, fetchLocation, initLocation, selectLocation, selectedLocations}) {
  // route: {params: defaultSelectedLocationList}
  // [] 대신 route로 WriteCourse에서 넘겨준 defaultSelectedLocationList 변경
  // loading true 일경우 로딩중 표시
  
  React.useEffect(()=>{
    // 추천 코스
    fetchLocation("keyword");
  }, []); 
  return (
    <Container>
      <Search ></Search>
      <FlatList 
        style={{width:"100%", height:50, backgroundColor:"#f5f5f5", padding:15}}
        data={selectedLocations}
        renderItem={
          ({item, index})=>{
            return (
                <TouchableOpacity 
                  key={item.index} 
                  style={{height:20, flexDirection:"row", marginRight:15}}
                  onPress={()=>{
                    const idx = selectedLocations.findIndex(e=>e.idx==item.idx);
                    if(idx != -1) {
                      selectLocation([...selectedLocations.slice(0, idx), ...selectedLocations.slice(idx+1, selectedLocations.length)])
                    }
                  }}
                >
                  {/*<Image />*/}
                  <Text style={{fontSize:14, height:20, color:theme.PRIMARY_COLOR}}>{item.title}</Text>
                  <Text style={{marginLeft:5, fontSize:10, height:20, color:"#aaa"}}>X</Text>
                </TouchableOpacity>
            );
          }
        }
        horizontal 
      />
      <FlatList 
        ItemSeparatorComponent={
          ({ highlighted }) => (
            <View
              style={{marginLeft:"auto", marginRight:"auto",backgroundColor:"#E3E3E3", width:"90%", height:1}}
            />
          )
        }
        style={{width:"100%"}}
        data={locations}
        renderItem={
          ({item, index})=>{
            return (
              <TouchableOpacity key={item.index} style={{height:60,paddingRight:20, paddingLeft:20, paddingTop:15, paddingBottom:15, flexDirection:"row"}}
                onPress={()=>{
                  if(selectedLocations.findIndex(e=>e.idx==item.idx)==-1) {
                    selectLocation(selectedLocations.concat(item))
                  }
                }}
              >
                {/*<Image />*/}
                <Text style={{paddingTop:10, fontSize:18, height:30, color:"#3c3c3c"}}>{item.title}</Text>
              </TouchableOpacity>
            );
        }
      }
      />
    </Container>
  );
}

export default connect(
  state=>({
    locations: state.location.locations, 
    error:state.location.error, 
    loading:state.location.loading,
    selectedLocations: state.location.selectedLocations
  }),
  {fetchLocation, initLocation, selectLocation}
)(AddCourse);
