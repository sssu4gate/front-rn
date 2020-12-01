import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import {
  requestProfileUser,
  requestNamechkUser,
  setUser,
} from "../reducers/userReducer";

export default connect(
  (state) => ({
    user: state.user,
  }),
  { setUser }
)(function ModalArea({ user, setUser, toggleModal }) {
  const areaList = [
    "강남구",
    "서초구",
    "용산구",
    "마포구",
    "송파구",
    "영등포구",
    "구로구",
    "광진구",
    "관악구",
    "동대문구",
    "성동구",
    "중량구",
    "종로구",
    "중구",
    "서대문구",
    "동작구",
    "강서구",
    "양천구",
    "도봉구",
    "노원구",
    "성북구",
    "강북구",
    "금천구",
    "강동구",
    "은평구",
  ];
  return (
    <>
      <View style={style.modal}>
        <Text style={style.text}>지역을 선택하세요</Text>
        <View>
          <Text>area</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log("asd");
              toggleModal();
            }}
            style={style.modalBtn}
          >
            <Text>변경</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log("asd");
              toggleModal();
            }}
            style={style.modalBtn}
          >
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
});

const style = StyleSheet.create({
  modal: {
    alignSelf: "center",
    width: 250,
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  modalBtn: {
    width: 51,
    height: 34,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    padding: 7,
    fontSize: 16,
  },
});
