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
  requestLoginUser,
  setUser,
} from "../../reducers/userReducer";
import ModalCalender from "../../components/ModalCalender";

export default connect(
  (state) => ({
    user: state.user,
  }),
  { setUser, requestNamechkUser, requestProfileUser }
)(function Settings({
  user,
  setUser,
  requestNamechkUser,
  requestProfileUser,
  requestLoginUser,
  navigation,
}) {
  console.log(user);
  const [isAreaEdit, setAreaEdit] = useState(false);
  const toggleAreaEdit = () => {
    setAreaEdit(!isAreaEdit);
  };
  const [name, setName] = useState(user.nickName);
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const [birth, setBirth] = useState(user.birth);
  const [yyyy, setyyyy] = useState("0000");
  const [mm, setmm] = useState("00");
  const [dd, setdd] = useState("00");
  const userArea = user.area;
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
    <ScrollView style={style.background}>
      <View style={style.area1}>
        <Text style={style.area1_text}>계정 설정</Text>
      </View>
      <View style={style.area2}>
        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 18, width: 24 }} />
            {user.imgUrl ? (
              <Image source={{ uri: user.imgUrl }} style={style.profileImg} />
            ) : (
              <Image
                source={require("../../assets/아이유1.jpg")}
                style={style.profileImg}
              />
            )}
            <TouchableOpacity style={{ alignSelf: "flex-end" }}>
              <Image
                source={require("../../assets/camera.png")}
                style={style.cameraIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={style.area2_text}>{user.nickName}</Text>
      </View>
      <View style={style.area3}>
        <Modal
          isVisible={calendarVisible}
          onBackdropPress={() => setCalendarVisible(false)}
        >
          <ModalCalender
            user={user}
            setUser={setUser}
            setCalendarVisible={setCalendarVisible}
          />
        </Modal>
        <View style={[style.area3_box]}>
          <Text style={style.area3_text}>닉네임 :</Text>
          <TextInput
            style={[
              style.area3_input,
              { color: user.nameChecked ? "green" : "red" },
            ]}
            placeholder={user.nickName}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => {
              setUser({ nickName: name });
              requestNamechkUser(user);
            }}
          >
            <Text style={[style.area3_text, { fontSize: 14 }, style.btnEdit]}>
              변경
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[style.area3_box]}>
          <Text style={style.area3_text}>생일 :</Text>
          <Text style={style.area3_text}>{user.birth}</Text>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => setCalendarVisible(true)}
          >
            <Image
              style={{ width: 12, height: 12 }}
              source={require("../../assets/Calendar.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[style.area3_box]}>
          <Text style={style.area3_text}>성별 :</Text>
          <View>
            {console.log(user.gender)}
            {user.gender ? (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => setUser({ ...user, gender: "M" })}
                >
                  <Text
                    style={[
                      style.area3_text,
                      { color: user.gender == "M" ? "#777777" : "#e3e3e3" },
                    ]}
                  >
                    남자
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setUser({ ...user, gender: "W" })}
                >
                  <Text
                    style={[
                      style.area3_text,
                      { color: user.gender == "W" ? "#777777" : "#e3e3e3" },
                    ]}
                  >
                    여자
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => setUser({ ...user, gender: "M" })}
                >
                  <Text style={[style.area3_text]}>남자</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setUser({ ...user, gender: "W" })}
                >
                  <Text style={[style.area3_text]}>여자</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={[style.area3_box]}>
          <Text style={[style.area3_text, { minWidth: 84 }]}>관심지역 :</Text>
          {isAreaEdit ? (
            <Text>
              {userArea.map((area) => {
                return (
                  <TouchableOpacity
                    key={area}
                    onPress={() => {
                      if (isAreaEdit) {
                        console.log("aasdasdasdsad");
                        console.log(area);
                        userArea.splice(userArea.indexOf(area), 1);
                        setUser({ area: userArea });
                      }
                    }}
                  >
                    <Text style={[style.area3_text, { paddingHorizontal: 5 }]}>
                      {area}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Text>
          ) : (
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={[style.area3_text, { paddingHorizontal: 0 }]}
            >
              {userArea + ` `}
            </Text>
          )}

          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={toggleAreaEdit}
          >
            <Text style={[style.area3_text, style.btnEdit]}>
              {isAreaEdit ? "완료" : "+추가"}
            </Text>
          </TouchableOpacity>
        </View>
        {isAreaEdit && (
          <View
            style={{ backgroundColor: "#eeeeee", padding: 5, borderRadius: 20 }}
          >
            <View
              style={{
                height: "100%",
                width: "100%",
                flexDirection: "row",
                padding: 8,
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {areaList.map((area) => {
                  if (userArea.indexOf(area) !== -1) return;
                  else {
                    return (
                      <TouchableOpacity
                        key={area}
                        onPress={() => {
                          userArea.push(area);
                          setUser({ ...user, area: userArea });
                        }}
                        style={{
                          margin: 5,
                        }}
                      >
                        <Text
                          style={[
                            style.area3_text,
                            {
                              padding: 5,
                              borderRadius: 15,
                              backgroundColor: "#eeeeee",
                            },
                          ]}
                        >
                          {area}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={style.area4}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={style.btnExte}
            onPress={() => {
              setUser({ ...user });
              navigation.goBack();
            }}
          >
            <Text style={[style.btn, style.btnYes, style.shadowBox]}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
});

const style = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  area1: {
    padding: 20,
  },
  area1_text: {
    fontSize: 28,
  },
  area2: {
    textAlign: "center",
    padding: 10,
    padding: 30,
  },
  area2_text: {
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    color: "#777777",
  },
  area3: {
    alignSelf: "center",
    alignContent: "center",
    width: "90%",
    padding: 20,
  },
  area3_text: {
    fontSize: 16,
    padding: 10,
    color: "#777777",
    backgroundColor: "#ffffff",
  },
  area3_box: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    padding: 3,
    margin: 5,
    minWidth: 230,
    maxWidth: 300,
  },
  area3_input: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    width: "40%",
  },
  area4: {
    width: "90%",
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  shadowBox: {
    shadowColor: "#777777",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
  },
  profileImg: {
    width: 140,
    height: 140,
    borderRadius: 100,
    alignSelf: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    width: 24,
    height: 18,
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
  btnEdit: {
    padding: 5,
    justifyContent: "center",
    color: "black",
    backgroundColor: "#eeeeee",
    margin: 5,
    marginLeft: 10,
    borderRadius: 10,
    fontSize: 14,
    color: "#555555",
  },
});
