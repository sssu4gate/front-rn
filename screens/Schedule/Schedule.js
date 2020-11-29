import * as React from 'react';
import { View, Text , Button, TouchableOpacity, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { FlatList } from "react-native-gesture-handler";
import * as theme from "../../assets/theme";

export default function Schedule({navigation, route, course}){
  let todayDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  const selectDate=(date)=>{
    let temp = {}
    temp[date]={selected:true};
    return temp;
  }
  const [date, setDate] = React.useState(selectDate(todayDate));

  return (
    <View style={{ flex: 1, alignItems: 'center', width:"100%", height:"100%", backgroundColor:"#fff" }}>
      <View style={{width:"100%"}}>
        <Calendar
          markedDates={date}
          theme={{
            todayTextColor: theme.PRIMARY_COLOR,
            selectedDayBackgroundColor: theme.PRIMARY_COLOR
          }}
          onDayPress={date =>setDate(selectDate(date.dateString))
          }
          monthFormat={"yyyy년 MMM"}
          renderArrow={(direction) => (
            <View>
              <Image style={{width:20, height:20}} source={{uri: require(direction=="left"?"../../assets/LeftArrow(pink).png":"../../assets/RightArrow(pink).png")}} />
            </View>
          )}
        />
      </View>
      <View style={{width:"100%", height:1, backgroundColor:"#e5e5e5"}}/>
      <Text style={{width:110, fontSize:20, marginTop:10, color:theme.SECOND_TEXT_COLOR}}>{Object.keys(date)}</Text>
      <FlatList 
        style={{width:"100%", flex:1, padding:15}}
        data={[1,2,3]}
        renderItem={
          ({item, index})=>{
            return (
              <TouchableOpacity 
                key={index} 
                style={{height:22, flexDirection:"row", marginBottom:15}}
                onPress={()=>{
                  console.log(item, index);
                }}
              >
                <Text style={{fontSize:18, color:theme.SECOND_TEXT_COLOR}}>{item}</Text>
              </TouchableOpacity>
            );
          }
        }
      />
    </View>
  );
}
