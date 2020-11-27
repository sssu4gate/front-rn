import React, { useState } from "react";
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

export default function SetProfile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [queryString, setQueryString] = useState("이지금");
  const [modal, setModal] = useState("");
  const interestArea = "동작구, 서초구, 강남구";
  const birth = "971224";
  const sex = "남자";
  return (
    <>
      <ScrollView style={style.background}>
        <View style={style.area1}>
          <Text style={style.area1_text}>계정 설정</Text>
        </View>
        <View style={style.area2}>
          <View style={{ alignSelf: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ height: 18, width: 24 }} />

              <Image
                source={{ uri: require("../../assets/아이유1.jpg") }}
                style={style.profileImg}
              />
              <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Image
                  source={{ uri: require("../../assets/camera.png") }}
                  style={style.cameraIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={style.area2_text}>asd</Text>
        </View>
        <View style={style.area3}>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setModal("name");
            }}
            style={style.btnExte}
          >
            <Text style={[style.area3_text, style.shadowBox]}>
              닉네임 : {queryString}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setModal("area");
            }}
            style={style.btnExte}
          >
            <Text style={[style.area3_text, style.shadowBox]}>
              생일 : {birth}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setModal("area");
            }}
            style={style.btnExte}
          >
            <Text style={[style.area3_text, style.shadowBox]}>
              성별 : {sex}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              setModal("area");
            }}
            style={style.btnExte}
          >
            <Text style={[style.area3_text, style.shadowBox]}>
              관심지역 : {interestArea}
            </Text>
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
        <View style={style.area4}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={style.btnExte}>
              <Text style={[style.btn, style.btnYes, style.shadowBox]}>
                저장
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnExte}>
              <Text style={[style.btn, style.btnNo, style.shadowBox]}>
                취소
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

function ChangeName({ name, setQueryString, toggleModal }) {
  return (
    <>
      <View style={style.modal}>
        <Text style={style.btnText}>변경할 닉네임</Text>
        <TextInput
          onChangeText={setQueryString}
          style={{
            color: "#000000",
            width: "50%",
            fontSize: 16,
            weight: "bold",
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#e3e3e3",
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
            style={style.btnExte}
          >
            <Text style={[style.modalBtn, style.btnYes, style.shadowBox]}>
              변경
            </Text>
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
              console.log(name);
            }}
            style={style.btnExte}
          >
            <Text style={[style.modalBtn, style.btnNo, style.shadowBox]}>
              취소
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function ChangeBirth() {}

function ChangeSex() {}

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
  var i = 0;
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
    padding: 20,
    flex: 0.1,
  },
  area1_text: {
    fontSize: 28,
  },
  area2: {
    textAlign: "center",
    padding: 10,
    flex: 0.3,
    padding: 20,
  },
  area2_text: {
    fontSize: 14,
    padding: 5,
    color: "#777777",
  },
  area3: {
    alignSelf: "center",
    flex: 0.7,
    width: "90%",
    padding: 20,
  },
  area3_text: {
    fontSize: 16,
    padding: 10,
    color: "#777777",
  },
  area4: {
    flex: 0.2,
    width: "90%",
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  shadowBox: {
    shadowColor: "#777777",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 1,
    borderRadius: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    flex: 0.6,
  },
  cameraIcon: {
    width: 24,
    height: 18,
    flex: 0.2,
  },
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
  },
  btnYes: {
    color: "white",
    backgroundColor: "#FF6DA0",
  },
  btnNo: {
    color: "black",
    backgroundColor: "#e3e3e3",
  },
  btnText: {
    fontSize: 18,
    padding: 10,
    color: "#777777",
  },
});
