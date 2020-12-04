import * as React from "react";
import { Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styled from "styled-components/native";
import Search from "./Search";
import {
  requestPlace,
  initPlace,
  selectPlace,
} from "../../reducers/placeReducer";
import * as theme from "../../assets/theme";
import LoadingSVG from "../../assets/Loading";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

function AddCourse({
  places,
  error,
  loading,
  requestPlace,
  initPlace,
  selectPlace,
  selectedPlaces,
  navigation,
  token,
  keyword,
  page,
  offset,
}) {
  // loading true 일경우 로딩중 표시
  React.useEffect(() => {
    // 추천 코스
    // 검색시 키워드 검색
    const initialKeyword = "숭실대 맛집";
    if (
      !loading &&
      !(
        page == 1 &&
        offset == 10 &&
        keyword == initialKeyword &&
        places.length != 0
      )
    ) {
      requestPlace(token, initialKeyword, 1, 10);
    }
  }, []);
  const searchHandler = (_keyword) => {
    if (
      !loading &&
      !(page == 1 && offset == 10 && keyword == _keyword && places.length != 0)
    ) {
      requestPlace(token, _keyword, 1, 10);
    }
  };

  console.log(places);
  return (
    <Container>
      <Search searchHandler={searchHandler}></Search>
      {!loading ? (
        <>
          <FlatList
            style={{
              width: "100%",
              height: 60,
              maxHeight: 60,
              backgroundColor: "#f5f5f5",
              padding: 15,
            }}
            data={selectedPlaces}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{ height: 20, flexDirection: "row", marginRight: 15 }}
                  onPress={() => {
                    const idx = selectedPlaces.findIndex(
                      (e) => e.id == item.id
                    );
                    if (idx != -1) {
                      selectPlace([
                        ...selectedPlaces.slice(0, idx),
                        ...selectedPlaces.slice(idx + 1, selectedPlaces.length),
                      ]);
                    }
                  }}
                >
                  {/*<Image />*/}
                  <Text
                    style={{
                      fontSize: 14,
                      height: 20,
                      color: theme.PRIMARY_COLOR,
                    }}
                  >
                    {item.place_name}
                  </Text>
                  <Image
                    source={require("../../assets/xBtn.png")}
                    style={{ marginLeft: 3, height: 10, width: 10 }}
                  />
                </TouchableOpacity>
              );
            }}
            horizontal
          />
          <FlatList
            ItemSeparatorComponent={({ highlighted }) => (
              <View
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#E3E3E3",
                  width: "90%",
                  height: 1,
                }}
              />
            )}
            style={{ width: "100%", marginBottom: 60 }}
            data={places}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 60,
                    paddingRight: 20,
                    paddingLeft: 20,
                    paddingTop: 15,
                    paddingBottom: 15,
                    flexDirection: "row",
                  }}
                  onPress={() => {
                    if (
                      selectedPlaces.findIndex((e) => e.id == item.id) == -1
                    ) {
                      selectPlace(selectedPlaces.concat(item));
                    }
                  }}
                >
                  {/*<Image />*/}
                  <Text
                    style={{
                      paddingTop: 10,
                      fontSize: 18,
                      height: 30,
                      color: "#3c3c3c",
                    }}
                  >
                    {item.place_name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </>
      ) : (
        <View style={{ alignItems: "center", flex: 1 }}>
          <LoadingSVG width={80} height={80} />
        </View>
      )}

      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 10,
          left: "auto",
          right: "auto",
          width: Dimensions.get("window").width * 0.9,
          height: 40,
          backgroundColor: theme.PRIMARY_COLOR,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: theme.PRIMARY_COLOR,
          }}
        >
          장소 추가하기
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

export default connect(
  (state) => ({
    places: state.place.places,
    error: state.place.error,
    loading: state.place.loading,
    selectedPlaces: state.place.selectedPlaces,
    token: state.user.accessToken,
    keyword: state.place.keyword,
    page: state.place.page,
    offset: state.place.offset,
  }),
  { requestPlace, initPlace, selectPlace }
)(AddCourse);
