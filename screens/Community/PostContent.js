import * as React from "react";
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import * as theme from "../../assets/theme";
import categoryMap from "../../components/categoryMap";

export default function PostContent({ post, initPlace, initPost, uploaded }) {
  const [text, setText] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        justifyContent: "left",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>코스</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column", overflow: "" }}>
        {post.places.map((item, index) => (
          <PlaceItem
            key={item.id}
            price={item.cost}
            title={item.placeDto.place_name}
            index={index}
            code={item.placeDto.category_group_code}
          />
        ))}
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>본문</Text>
        <Line />
      </Content>
      <Content style={{ flexDirection: "column" }}>
        <Text style={{ color: "#777", fontSize: 18, minHeight: 80 }}>
          {post.content}
        </Text>
      </Content>
      <Content>
        {post.tags?.map((item) => (
          <View />
        ))}
      </Content>
      <Content>
        <Text style={{ fontSize: 12, color: "#AAAAAA" }}>댓글</Text>
        <Line />
      </Content>
      <Content style={{flexDirection:"column"}}>
        <TextInput
          style={{
            textAlignVertical: "top",
            minHeight: 120,
            maxHeight: 120,
            borderColor: "#e3e3e3",
            borderWidth: 1,
            borderRadius: 10,
            flex: 1,
            padding: 5,
            marginBottom: 15,
          }}
          multiline
          numberOfLines={4}
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity style={{flex:1, justifyContent:"center", alignItems:"center", borderColor:"#e3e3e3", borderWidth:1, padding:10, borderRadius:10, backgroundColor:theme.PRIMARY_COLOR, marginBottom:10}}>
          <Text style={{color:"#fff", fontWeight:"bold", fontSize:16}}>댓글남기기</Text>
        </TouchableOpacity>
      </Content>
    </View>
  );
}

function PlaceItem({ title, index, price, type, code }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
        height: 40,
        borderRadius: 10,
        padding: 8,
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: 10,
          width: 20,
          height: 20,
          backgroundColor: theme.PRIMARY_COLOR,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>{index + 1}</Text>
      </View>
      <View
        style={{
          width: 1,
          height: 25,
          backgroundColor: "#e3e3e3",
          marginLeft: 7,
          marginRight: 7,
        }}
      />
      <Image style={{width:25, height:25, marginRight:10}} source={categoryMap(code)}/>
      <Text style={{ color: "#3c3c3c", flex: 1 }}>{title}</Text>
      <View
        style={{
          borderRadius: 4,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Text style={{ color: "#3c3c3c" }}>₩ {price}</Text>
      </View>
    </View>
  );
}

const Content = ({ children, style }) => (
  <View
    style={{
      flexDirection: "row",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      width: "100%",
      ...style,
    }}
  >
    {children}
  </View>
);

const Line = ({ children, style }) => (
  <View
    style={{
      marginLeft: 10,
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#e3e3e3",
      ...style,
    }}
  >
    {children}
  </View>
);
