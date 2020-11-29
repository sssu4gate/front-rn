import * as React from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {useNavigation, TabActions} from "@react-navigation/native";
import {connect} from "react-redux";
import * as theme from "../../assets/theme";
import {loadSelectedPlace, selectPlace, initPlace} from "../../reducers/placeReducer";
import {setPost, initPost, requestSavePost} from "../../reducers/postReducer";
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
function PostContent({post, setPost, selectPlace, initPlace, loadSelectedPlace, selectedPlaces, initPost, requestSavePost, uploaded}) {
  const [text, setText] = React.useState("");
  const navigation = useNavigation();

  React.useEffect(()=>{
    if(uploaded) {
      navigation.dispatch(TabActions.jumpTo('Community', {screen:"PostDetail"}))
      initPost();
      initPlace();
    }
  }, [uploaded])

  console.log(post);

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
          data={post.places}
          renderItem={
            ({item, index})=>{
              return <PlaceItem key={index} price={item.cost} title={item.placeDto.place_name} index={index}/>;
            }
          }
        />
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>메모</Text>
        <Line />
      </Content>
      <Content style={{paddingBottom:0}}>
        <FlatList 
          style={{width:"100%", overflow:"visible"}}
          data={post.memos}
          renderItem={
            ({item, index})=>{
              return <Memo {...item} checkHandler={
                ()=>{
                  setPost({...post, memos:[...post.memos.slice(0, index), {text:item.text, type:Number(!item.type)}, ...post.memos.slice(index+1, post.memos.length)]});
                }
              }
              />;
            }
          }
        />
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>본문</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <Text style={{color:"#777", fontSize:18, minHeight:100}}>
          {post.content}
        </Text>
      </Content>
      <Content>
        <FlatList 
          style={{width:"100%", overflow:"visible"}}
          data={post.tags}
          renderItem={
            ({item, index})=>{
              return <View />;
            }
          }
        />
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>댓글</Text>
        <Line />
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
    post: state.post.post,
    uploaded: state.post.uploaded
  }),
  {loadSelectedPlace, selectPlace, initPlace, setPost, initPost, requestSavePost}
)(PostContent);
