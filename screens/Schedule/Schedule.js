import * as React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import { FlatList } from "react-native-gesture-handler";
import * as theme from "../../assets/theme";

export default function Schedule({ navigation, route, course }) {
  const today = new Date();
  const y = today.getFullYear();
  const m =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const selectDate = (date) => ({ [date]: { selected: true } });
  const [date, setDate] = React.useState(selectDate(`${y}-${m}-${d}`));

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ width: "100%" }}>
        <Calendar
          markedDates={date}
          theme={{
            todayTextColor: theme.PRIMARY_COLOR,
            selectedDayBackgroundColor: theme.PRIMARY_COLOR,
          }}
          onDayPress={(date) => setDate(selectDate(date.dateString))}
          monthFormat={"yyyy년 MMM"}
          renderArrow={(direction) => (
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={
                  direction == "left"
                    ? require("../../assets/LeftArrow(pink).png")
                    : require("../../assets/RightArrow(pink).png")
                }
              />
            </View>
          )}
        />
      </View>
      <View style={{ width: "100%", height: 1, backgroundColor: "#e5e5e5" }} />
      <Text
        style={{
          width: 110,
          fontSize: 20,
          marginTop: 10,
          color: theme.SECOND_TEXT_COLOR,
        }}
      >
        {Object.keys(date)}
      </Text>
      {false ? (
        <FlatList
          style={{ width: "100%", flex: 1, padding: 15 }}
          data={[1, 2, 3]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ height: 22, flexDirection: "row", marginBottom: 15 }}
                onPress={() => {
                  console.log(item, index);
                }}
              >
                <Text style={{ fontSize: 18, color: theme.SECOND_TEXT_COLOR }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#777" }}>
            코스를 추가해보세요!
          </Text>
        </View>
      )}
    </View>
  );
}
