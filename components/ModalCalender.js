import * as React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";
import * as theme from "../assets/theme";
import SwiperFlatList from "react-native-swiper-flatlist";

export default function cal({ user, setUser, setCalendarVisible }) {
  var yyyy = [];
  var mm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var dd = [];
  for (var i = 0; i < 60; i++) {
    yyyy[i] = 2020 - i;
  }
  for (var i = 1; i < 32; i++) {
    dd[i] = i;
  }
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState("");
  const [indexY, setIndexY] = React.useState(0);
  const [indexM, setIndexM] = React.useState(0);
  const [indexD, setIndexD] = React.useState(0);

  return (
    <View
      style={{
        alignSelf: "center",
        width: 250,
        height: 200,
        backgroundColor: "white",
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <View style={{ backgroundColor: "white", height: 60, width: "40%" }}>
          <SwiperFlatList vertical={true}>
            <Text
              key={-1}
              style={{
                fontSize: 20,
                padding: 10,
                textAlign: "center",
                height: 60,
              }}
            >
              YYYY
            </Text>
            {yyyy.map((yy) => {
              return (
                <TouchableOpacity
                  key={yy}
                  onPress={() => {
                    setYear(String(yy));
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                      textAlign: "center",
                      height: 60,
                    }}
                  >
                    {yy}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </SwiperFlatList>
        </View>
        <View
          style={{
            backgroundColor: "white",
            height: 60,
            width: "30%",
          }}
        >
          <SwiperFlatList vertical={true} index={indexM}>
            <Text
              key={-1}
              style={{
                fontSize: 20,
                padding: 10,
                textAlign: "center",
                height: 60,
              }}
            >
              MM
            </Text>
            {mm.map((m) => {
              return (
                <View>
                  <TouchableOpacity
                    key={m}
                    onPress={() => {
                      setMonth(String(m));
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        padding: 10,
                        textAlign: "center",
                        height: 60,
                      }}
                    >
                      {m}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </SwiperFlatList>
        </View>
        <View style={{ backgroundColor: "white", height: 60, width: "30%" }}>
          <SwiperFlatList vertical={true} index={indexD}>
            <Text
              key={-1}
              style={{
                fontSize: 20,
                padding: 10,
                textAlign: "center",
                height: 60,
              }}
            >
              DD
            </Text>
            {dd.map((d) => {
              return (
                <TouchableOpacity
                  key={d}
                  onPress={() => {
                    setDay(String(d));
                    console.log(d);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      padding: 10,
                      textAlign: "center",
                      height: 60,
                    }}
                  >
                    {d}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </SwiperFlatList>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          height: 30,
        }}
      >
        {year != "" && (
          <Text
            style={{
              fontSize: 16,
              padding: 5,
              textAlign: "center",
            }}
          >
            {year}년
          </Text>
        )}
        {month != "" && (
          <Text
            style={{
              fontSize: 16,
              padding: 5,
              textAlign: "center",
            }}
          >
            {month}월
          </Text>
        )}
        {day != "" && (
          <Text
            style={{
              fontSize: 16,
              padding: 5,
              textAlign: "center",
            }}
          >
            {day}일
          </Text>
        )}
      </View>
      <View style={{ alignSelf: "center", height: 60 }}>
        {year != "" && month != "" && day != "" && (
          <View>
            <TouchableOpacity
              style={style.btnExte}
              onPress={() => {
                var birth = year + "-" + month + "-" + day;
                console.log(birth);
                setUser({ ...user, birth: birth });
                setCalendarVisible(false);
              }}
            >
              <Text style={[style.btn, style.btnYes, style.shadowBox]}>
                완료
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  btnYes: {
    color: "white",
    backgroundColor: "#FF6DA0",
  },
  shadowBox: {
    shadowColor: "#777777",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 20,
  },
  btn: {
    width: 60,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    padding: 7,
    fontSize: 20,
  },
  btnExte: {
    padding: 10,
    justifyContent: "center",
    borderRadius: 20,
  },
});
