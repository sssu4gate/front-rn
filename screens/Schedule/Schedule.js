import * as React from 'react';
import { View, Text , Button} from 'react-native';
import {Calendar} from 'react-native-calendars';
import * as theme from "../../assets/theme";
import LeftArrow from "../../assets/images/LeftArrow";
import RightArrow from "../../assets/images/RightArrow";

export default function Schedule({navigation, route, course}){
  const todyDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
  const [date, setDate] = React.useState({todayDate:{selected:true}});

  return (
    <View style={{ flex: 1, alignItems: 'center', width:"100%", height:"100%" }}>
      <View style={{width:"100%"}}>
        <Calendar
          markedDates={date}
          theme={{
            todayTextColor: theme.PRIMARY_COLOR,
            selectedDayBackgroundColor: theme.PRIMARY_COLOR
          }}
          onDayPress={day =>{
            console.log(day);
            const temp = {}
            temp[day.dateString] = {selected:true};
            setDate(temp)
          }}
          monthFormat={"yyyy년 MMM"}
          renderArrow={(direction) => (
            <View style={{width:20, height:20}}>
              {direction == "left" ? <LeftArrow /> : <RightArrow />}
            </View>
          )}
        />
        <Text>123</Text>
      </View>
    </View>
  );
}
