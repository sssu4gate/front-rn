import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

export default function SetProfile({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
          <TouchableOpacity onPress={toggleModal}>
            <Text style={style.area3_text}>닉네임 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.area3_text}>비밀번호 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.area3_text}>관심지역 변경</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.area3_text}>성별</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.area3_text}>생일</Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View>
              <Text>Hello!</Text>
              <Button title="Hide modal" onPress={toggleModal} />
            </View>
          </Modal>
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
});
