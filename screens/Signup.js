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
  Alert,
  Dimensions,
} from "react-native";
import { Calendar } from "react-native-calendars";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import {
  requestNamechkUser,
  requestSignupUser,
  setUser,
} from "../reducers/userReducer";
import LoadingSVG from "../assets/Loading";
import * as theme from "../assets/theme";

export default connect(
  (state) => ({
    user: state.user,
  }),
  { setUser, requestNamechkUser, requestSignupUser }
)(function Settings({
  user,
  setUser,
  requestNamechkUser,
  requestSignupUser,
  navigation,
}) {
  console.log(user);
  const [isAreaEdit, setAreaEdit] = useState(false);
  const toggleAreaEdit = () => {
    setAreaEdit(!isAreaEdit);
  };
  const [calendarVisible, setCalendarVisible] = React.useState(false);
  const today = new Date();
  const y = today.getFullYear();
  const m =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const d = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const date = {
    ...(user.birth != ""
      ? { [user.birth]: { selected: true } }
      : { [`${y}-${m}-${d}`]: { selected: true } }),
  };

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
  ].sort();
  return (
    <View style={style.background}>
      {!user.id ? (
        <View style={{ alignItems: "center", marginTop: 20, flex: 1 }}>
          <LoadingSVG width={80} height={80} />
        </View>
      ) : (
        <>
          <ScrollView>
            <View style={style.area1}>
              <Text style={style.area1_text}>회원가입</Text>
            </View>
            <View style={style.area2}>
              <View style={{ alignSelf: "center" }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ height: 18, width: 24 }} />
                  <Image
                    source={{
                      uri: user.profileImageUrl,
                    }}
                    style={style.profileImg}
                  />
                  <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                    <Image
                      source={require("../assets/camera.png")}
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
                <View
                  style={{
                    width: Dimensions.get("window").width * 0.8,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Calendar
                    style={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    markedDates={date}
                    theme={{
                      todayTextColor: theme.PRIMARY_COLOR,
                      selectedDayBackgroundColor: theme.PRIMARY_COLOR,
                    }}
                    onDayPress={(day) =>
                      setUser({ ...user, birth: day.dateString })
                    }
                    monthFormat={"yyyy년 MMM"}
                    renderArrow={(direction) => (
                      <View>
                        <Image
                          style={{ width: 20, height: 20 }}
                          source={
                            direction == "left"
                              ? require("../assets/LeftArrow(pink).png")
                              : require("../assets/RightArrow(pink).png")
                          }
                        />
                      </View>
                    )}
                  />
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      backgroundColor: theme.PRIMARY_COLOR,
                      padding: 8,
                      minHeight: 40,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      justifyContent: "center",
                    }}
                    onPress={() => setCalendarVisible(false)}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      확인
                    </Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <Modal
                isVisible={isAreaEdit}
                onBackdropPress={() => setAreaEdit(false)}
              >
                <View
                  style={{
                    width: Dimensions.get("window").width * 0.8,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      backgroundColor: "#fff",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      justifyContent: "center",
                    }}
                  >
                    {areaList.map((area) => {
                      const idx = user.area.findIndex((e) => e == area);
                      return (
                        <TouchableOpacity
                          key={area}
                          onPress={() => {
                            setUser({
                              ...user,
                              ...(idx == -1
                                ? { area: [...user.area, area].sort() }
                                : {
                                    area: [
                                      ...user.area.slice(0, idx),
                                      ...user.area.slice(
                                        idx + 1,
                                        user.area.length
                                      ),
                                    ],
                                  }),
                            });
                          }}
                          style={{
                            margin: 10,
                            minWidth: 60,
                          }}
                        >
                          <Text
                            style={{
                              padding: 5,
                              borderRadius: 15,
                              color: idx == -1 ? "#777" : theme.PRIMARY_COLOR,
                            }}
                          >
                            {area}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      backgroundColor: theme.PRIMARY_COLOR,
                      padding: 8,
                      minHeight: 40,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      justifyContent: "center",
                    }}
                    onPress={() => setAreaEdit(false)}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      확인
                    </Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <View style={[style.area3_box]}>
                <Text style={style.area3_text}>닉네임 :</Text>
                <TextInput
                  style={[
                    style.area3_input,
                    { color: user.nameChecked ? "green" : "red", flex: 1 },
                  ]}
                  value={user.nickName}
                  onChangeText={(text) => {
                    setUser({ ...user, nickName: text, nameChecked: false });
                  }}
                />
                <TouchableOpacity
                  style={{
                    ...style.btnEdit,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                  onPress={() => {
                    requestNamechkUser(user.nickName);
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#777" }}>중복확인</Text>
                </TouchableOpacity>
              </View>

              <View style={[style.area3_box]}>
                <Text style={style.area3_text}>생일 :</Text>
                <Text style={style.area3_text}>
                  {user.birth != "" ? user.birth : `${y}-${m}-${d}`}
                </Text>
                <TouchableOpacity
                  style={{ justifyContent: "center" }}
                  onPress={() => setCalendarVisible(true)}
                >
                  <Image
                    style={{ width: 12, height: 12 }}
                    source={require("../assets/Calendar.png")}
                  />
                </TouchableOpacity>
              </View>
              <View style={[style.area3_box]}>
                <Text style={style.area3_text}>성별 :</Text>
                <View>
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
                </View>
              </View>
              <View style={[style.area3_box]}>
                <Text style={[style.area3_text, { minWidth: 84 }]}>
                  관심지역 :
                </Text>
                <View style={{ flex: 1 }}>
                  {isAreaEdit ? (
                    <Text>
                      {user.area.map((area) => {
                        return (
                          <TouchableOpacity
                            key={area}
                            onPress={() => {
                              if (isAreaEdit) {
                                user.area.splice(user.area.indexOf(area), 1);
                                setUser({ area: user.area });
                              }
                            }}
                          >
                            <Text
                              style={[
                                style.area3_text,
                                { paddingHorizontal: 5 },
                              ]}
                            >
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
                      {user.area.join(", ")}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    ...style.area3_text,
                    ...style.btnEdit,
                    minWidth: 50,
                    minHeight: 30,
                  }}
                  onPress={toggleAreaEdit}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#777",
                    }}
                  >
                    추가
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={style.area4}>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                left: "auto",
                right: "auto",
                width: Dimensions.get("window").width * 0.9,
                height: 40,
                backgroundColor: theme.PRIMARY_COLOR,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                if (user.nameChecked == false)
                  return Alert.alert("닉네임", "닉네임 중복체크 해주세요.");
                else if (user.birth == "")
                  return Alert.alert("생일", "생일을 입력 해주세요.");
                else if (user.gender == "")
                  return Alert.alert("성별", "성별을 입력 해주세요.");
                requestSignupUser(user);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: theme.PRIMARY_COLOR,
                }}
              >
                회원 가입
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
});

const style = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  area1: {
    padding: 10,
  },
  area1_text: {
    fontSize: 28,
  },
  area2: {
    textAlign: "center",
    padding: 10,
  },
  area2_text: {
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    color: "#777777",
    marginTop: 5,
  },
  area3: {
    alignSelf: "center",
    alignContent: "center",
    width: "90%",
    marginTop: 20,
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
    width: "90%",
    marginBottom: 10,
    minWidth: 230,
  },
  area3_input: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    width: "40%",
  },
  area4: {
    flex: 1,
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
