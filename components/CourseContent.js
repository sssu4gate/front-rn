import * as React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import * as theme from "../assets/theme";
import {useNavigation} from "@react-navigation/native";

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
const Indicator = styled.View`
  width: 20px;
  height: 100%;
`;


function Memo({text, isChecked, checkHandler}) {
  return (
    <View style={{flexDirection:'row', padding:12, boxShadow:"1px 1px 5px #00000040", borderRadius:10, marginBottom:15}}>
      {isChecked!==undefined?(
        <TouchableOpacity style={{height:20, width:20, borderWidth:1, borderColor:'red' }}>
          {/* SVG check */}
        </TouchableOpacity>
      ):null}
      <Text style={{flex:1}}>{text}</Text>
    </View>
  )
}

export default function CourseContent({ editMode, courses, memos, setCourses, setMemos}) {
  const [text, setText] = React.useState("");
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>코스</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
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
      <Content style={{ flexDirection: "column" }}>
        {
          memos.map(memo=><Memo {...memo} />)
        }
        <TextInput 
          style={{height: 100, borderColor: "#e3e3e3" , borderWidth: 0.1, borderRadius:10, flex:1, padding:5, marginBottom:15 }}
          multiline
          numberOfLines={4}
          onChangeText={setText}
          value={text}/>
        <Content style={{ padding: "0" }}>
          <AddButton onPress={()=>{text!=''?setMemos([...memos, {text, type:'memo'}]):null;setText('')}}>
            <Text
              style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}
            >
              메모 추가
            </Text>
          </AddButton>
          <Indicator />
          <AddButton onPress={()=>{text!=''?setMemos([...memos, {text, type:'check', isChecked:false}]):null;setText('')}}>
            <Text
              style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}
            >
              체크리스트 추가
            </Text>
          </AddButton>
        </Content>
      </Content>
    </Container>
  );
}
