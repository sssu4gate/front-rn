import * as React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {useNavigation, TabActions} from "@react-navigation/native";
import {connect} from "react-redux";
import * as theme from "../../assets/theme";
import {loadSelectedPlace, selectPlace, initPlace} from "../../reducers/placeReducer";
import {setCourse, initCourse, requestSaveCourse} from "../../reducers/courseReducer";
import CheckFullPinkImage from "../../assets/CheckFull(pink).png"
import UnCheckPinkImage from "../../assets/UnCheck(pink).png"
import UnCheckAAAImage from "../../assets/UnCheck(AAA).png"

const Content = ({children, style})=>(
  <View style={{flexDirection:"row", paddingTop:10, paddingBottom:10, paddingLeft:30, paddingRight:30, width:"100%", ...style}}>
    {children}
  </View>
);

const Line = ({children, style})=>(
  <View style={{marginLeft:10, flex:1, borderBottomWidth:1, borderBottomColor:"#e3e3e3", ...style}}>
    {children}
  </View>
);

const AddButton = ({children, style})=>(
  <TouchableOpacity style={{flex:1, height:40, justifyContent:"center", alignItems:"center", borderRadius:10, boxShadow:"1px 1px 5px #00000040", ...style}}>
    {children}
  </TouchableOpacity>
);

const Temp=(props)=>{
  console.log(props);
  return <View />
}
function CourseContent({course, setCourse, selectPlace, initPlace, loadSelectedPlace, selectedPlaces, initCourse, requestSaveCourse, uploaded}) {
  const [text, setText] = React.useState("");
  const navigation = useNavigation();

  React.useEffect(()=>{
    if(uploaded) {
      navigation.dispatch(TabActions.jumpTo('Community', {screen:"CourseDetail"}))
      initCourse();
      initPlace();
    }
  }, [uploaded])

  return (
    <View
      style={{
        flex: 1,
        width: "100vw",
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "#fff"
      }}
    >
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
              return <PlaceItem price={0} title={item.place_name} index={index}/>;
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
              return <Memo {...item} checkHandler={
                ()=>{
                  setCourse({...course, memos:[...course.memos.slice(0, index), {text:item.text, type:Number(!item.type)}, ...course.memos.slice(index+1, course.memos.length)]});
                }
              }
              />;
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
          <AddButton onPress={()=>{text!=''?setCourse({...course, memos:[...course.memos, {text, type:3}]}):null;setText('')}}>
            <Text
              style={{ color: "#aaa", fontSize: 16, fontWeight: "bold" }}
            >
              메모 추가
            </Text>
          </AddButton>
          <View style={{width:20, height:"100%"}} />
          <AddButton onPress={()=>{text!=''?setCourse({...course, memos:[...course.memos, {text, type:0}]}):null;setText('')}}>
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
          onPress={()=>{setCourse({...course, shareType:course.shareType=="PUBLIC"?"PRIVATE":"PUBLIC"})}}
        >
          <Image style={{width:14, height:14}} source={{uri:course.shareType=="PUBLIC"?CheckFullPinkImage:UnCheckAAAImage }} />
          <Text
            style={{
              fontSize: 12,
              color: course.shareType=="PUBLIC" ? theme.PRIMARY_COLOR : "#AAAAAA",
              marginLeft: 5,
            }}
          >
            공유
          </Text>
        </TouchableOpacity>
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <TextInput 
          style={{height: 100, borderColor: "#e3e3e3" , borderWidth: 0.1, borderRadius:10, flex:1, padding:5}}
          multiline
          numberOfLines={10}
          onChangeText={text=>setCourse({...course, content:text})}
          value={course.content}/>
      </Content>
      <Content style={{ paddingTop:0 }}>
        <TouchableOpacity 
          style={{flex:1, height:40, boxShadow:"1px 1px 5px #00000040", borderRadius:10, justifyContent:"center", alignItems:"center", marginRight:10}}
          onPress={()=>{setText("");initCourse()}}
        >
          <Text style={{color:"#aaa", fontSize:16, fontWeight:"bold"}}>초기화 하기</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{flex:1, height:40, boxShadow:"1px 1px 5px #00000040", backgroundColor:theme.PRIMARY_COLOR, borderRadius:10, justifyContent:"center", alignItems:"center"}}
          onPress={()=>{
            console.log(course);
            const finalCourse = {
              "content": course.content,
              "courseName": course.courseName,
              "memos": course.memos.map(memo=>JSON.stringify(memo)),
              "places": selectedPlaces,
              "shareType": course.shareType
            }
            requestSaveCourse("", finalCourse);
          }}
        >
          <Text style={{color:"#ffffff", fontSize:16, fontWeight:"bold"}}>작성 하기</Text>
        </TouchableOpacity>
      </Content>
    </View>
  );
}

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

function Memo({text, type, checkHandler}) {
  return (
    <View style={{flexDirection:'row', padding:12, boxShadow:"1px 1px 5px #00000040", borderRadius:10, alignItems:'center', marginBottom:15}}>
      {type!==3?(
        <>
        <TouchableOpacity style={{borderRadius:"25%"}} onPress={checkHandler}>
            <Image style={{width:16, height:16}} source={{uri: type?CheckFullPinkImage:UnCheckPinkImage}} />
          </TouchableOpacity>
          <View style={{width:1, height:20, backgroundColor:"#e3e3e3", marginLeft:7, marginRight:7}}/>
        </>
      ):null}
      <Text style={{flex:1, color:"#3c3c3c"}}>{text}</Text>
    </View>
  )
}

export default connect(
  state=>({
    selectedPlaces: state.place.selectedPlaces,
    course: state.course.course,
    uploaded: state.course.uploaded
  }),
  {loadSelectedPlace, selectPlace, initPlace, setCourse, initCourse, requestSaveCourse}
)(CourseContent);