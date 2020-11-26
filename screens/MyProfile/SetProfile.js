import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";

export default function SetProfile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [queryString, setQueryString] = useState("");
  const [modal, setModal] = useState("");

  return (
    <>
      <View style={style.background}>
        <View style={style.area1}>
          <Text style={style.area1_text}>계정 설정</Text>
        </View>
        <View style={style.area2}>
          <Image
            source={{ uri: require("../../assets/아이유1.jpg") }}
            style={style.profileImg}
          />
          <Text style={style.area2_text}>asd</Text>
        </View>
        <View style={style.area3}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setModal("name");
            }}
          >
            <Text style={style.area3_text}>닉네임 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setModal("area");
            }}
          >
            <Text style={style.area3_text}>관심지역 변경</Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            {modal === "name" && (
              <ChangeName
                name={queryString}
                setQueryString={setQueryString}
                toggleModal={toggleModal}
              />
            )}
            {modal === "area" && <ChangeArea toggleModal={toggleModal} />}
          </Modal>
        </View>
      </View>
    </>
  );
}

function ChangeName({ name, setQueryString, toggleModal }) {
  return (
    <>
      <View style={style.modal}>
        <Text style={style.text}>변경할 닉네임</Text>
        <TextInput
          onChangeText={setQueryString}
          style={{
            color: "#000000",
            width: "50%",
            height: "10%",
            fontSize: 20,
            weight: "bold",
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#777777",
            fontSize: 14,
            borderRadius: 10,
            padding: 5,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              console.log(name);
            }}
            style={style.modalBtn}
          >
            <Text>변경</Text>
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              console.log(name);
            }}
            style={style.modalBtn}
          >
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function ChangeArea({ toggleModal }) {
  const dummy = [
    "관악구",
    "동작구",
    "서초구",
    "강남구",
    "마포구",
    "강서구",
    "강동구",
  ];
  return (
    <>
      <View style={style.modal}>
        <Text style={style.text}>지역을 선택하세요</Text>
        <View>
          {dummy.map((area) => (
            <TouchableOpacity
              onPress={() => {
                console.log(area);
                toggleModal();
              }}
            >
              <Text>{area}</Text>
            </TouchableOpacity>
          ))}
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
              toggleModal();
              console.log(name);
            }}
            style={style.modalBtn}
          >
            <Text>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  area1: {
    padding: 10,
    flex: 0.1,
  },
  area1_text: {
    fontSize: 28,
  },
  area2: {
    textAlign: "center",
    padding: 10,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
    flex: 0.3,
  },
  area2_text: {
    fontSize: 14,
    padding: 5,
  },
  area3: {
    flex: 0.6,
  },
  area3_text: {
    fontSize: 20,
    padding: 10,
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  modal: {
    alignSelf: "center",
    width: 250,
    height: 200,
    backgroundColor: "#e2e2e2",
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  modalBtn: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#777777",
    borderRadius: 10,
  },
  text: {
    padding: 5,
  },
});
