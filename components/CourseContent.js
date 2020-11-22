import * as React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import * as theme from "../assets/theme";
import {useNavigation} from "@react-navigation/native";
import {connect} from "react-redux";
import {loadSelectedPlace, selectPlace} from "../reducers/placeReducer";
import {setCourse} from "../reducers/courseReducer";
import Check from "../assets/images/Check";
import CheckFull from "../assets/images/CheckFull";

const Container = styled.View`
  flex: 1;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;
const Content = styled.View`
  flex-direction: row;
  padding: 10px 30px;
  width: 100%;
`;
const Line = styled.View`
  margin-left:10px;
  flex:1;
  border-bottom-width: 1px
  border-bottom-color: #e3e3e3;
`;
const AddButton = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #00000040;
`;

function PlaceItem({title, index, price, type}){
  return (
    <TouchableOpacity style={{flexDirection:"row", marginBottom:20, boxShadow:"1px 1px 5px #00000040", height:40, borderRadius:10, padding:8, alignItems:"center"}}>
      <Text style={{borderRadius:"50%", width:20, height:20, color:"#ffffff", backgroundColor:theme.PRIMARY_COLOR, textAlign:"center"}}>{index + 1}</Text>
      <View style={{width:1, height:25, backgroundColor:"#e3e3e3", marginLeft:7, marginRight:7}}/>
      {/*<Image />*/}
      <Text style={{color:"#3c3c3c", flex:1}}>{title}</Text>
      <Text style={{borderRadius:4, paddingLeft:5, paddingRight:5, paddingTop:2, paddingBottom:2, backgroundColor:"#e5e5e5", color:"#3c3c3c"}}>₩ {price}</Text>
    </TouchableOpacity>
  );
}


function Memo({text, isChecked, checkHandler}) {
  return (
    <View style={{flexDirection:'row', padding:12, boxShadow:"1px 1px 5px #00000040", borderRadius:10, alignItems:'center', marginBottom:15}}>
      {isChecked!==undefined?(
        <>
          <TouchableOpacity style={{height:16, width:16, borderWidth:1, borderColor:theme.PRIMARY_COLOR, borderRadius:"25%" }}>
            {/* SVG check */}
          </TouchableOpacity>
          <View style={{width:1, height:20, backgroundColor:"#e3e3e3", marginLeft:7, marginRight:7}}/>
        </>
      ):null}
      <Text style={{flex:1, color:"#3c3c3c"}}>{text}</Text>
    </View>
  )
}

function CourseContent({ editMode, course, setCourse, selectPlace, loadSelectedPlace, selectedPlaces}) {
  const [text, setText] = React.useState("");
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>코스</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <FlatList 
          style={{width:"100%", overflow:"visible"}}
          data={selectedPlaces}
          renderItem={
            ({item, index})=>{
              return <PlaceItem price={0} title={item.title} index={index}/>;
            }
          }
        />
        <View style={{ height:40 }}>
          <AddButton onPress={()=>{navigation.navigate("AddCourse")}}>
            <Text
              style={{ color: "#aaa", fontSize: "16px", fontWeight: "bold" }}
            >
              코스 추가
            </Text>
          </AddButton>
        </View>
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>메모</Text>
        <Line />
      </Content>
      <Content style={{paddingBottom:0}}>
        <FlatList 
          style={{width:"100%", overflow:"visible"}}
          data={course.memos}
          renderItem={
            ({item, index})=>{
              return <Memo {...item}/>;
            }
          }
        />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <TextInput 
          style={{height: 100, borderColor: "#e3e3e3" , borderWidth: 0.1, borderRadius:10, flex:1, padding:5, marginBottom:15 }}
          multiline
          numberOfLines={4}
          onChangeText={setText}
          value={text}/>
        <Content style={{ padding: "0" }}>
          <AddButton onPress={()=>{text!=''?setCourse({...course, memos:[...memos, {text, type:'memo'}]}):null;setText('')}}>
            <Text
              style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}
            >
              메모 추가
            </Text>
          </AddButton>
          <View style={{width:20, height:"100%"}} />
          <AddButton onPress={()=>{text!=''?setCourse({...course, memos:[...memos, {text, type:'check', isChecked:false}]}):null;setText('')}}>
            <Text
              style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}
            >
              체크리스트 추가
            </Text>
          </AddButton>
        </Content>
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>본문</Text>
        <Line />
        <TouchableOpacity
          style={{
            marginLeft: 15,
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
            justifyContent: "right",
          }}
          onPress={()=>{setCourse({...course, sharing:!course.sharing})}}
        >
          {course.sharing ? <CheckFull /> : <Check />}
          <Text
            style={{
              fontSize: 12,
              color: course.sharing ? theme.PRIMARY_COLOR : "#AAAAAA",
              marginLeft: 5,
            }}
          >
            공유
          </Text>
        </TouchableOpacity>
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <TextInput 
          style={{height: 100, borderColor: "#e3e3e3" , borderWidth: 0.1, borderRadius:10, flex:1, padding:5, marginBottom:15 }}
          multiline
          numberOfLines={10}
          onChangeText={text=>setCourse({...course, content:text})}
          value={course.content}/>
      </Content>
    </Container>
  );
}

export default connect(
  state=>({
    selectedPlaces: state.place.selectedPlaces,
    course: state.course.course,
  }),
  {loadSelectedPlace, selectPlace, setCourse}
)(CourseContent);
