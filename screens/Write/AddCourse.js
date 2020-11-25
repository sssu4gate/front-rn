import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styled from "styled-components/native";
import Search from "../../components/Search";
import {
  fetchPlace,
  initPlace,
  selectPlace,
} from "../../reducers/placeReducer";
import * as theme from "../../assets/theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

function CourseItem({ imgURL, text, handler }) {
  return (
    <View>
      <Image />
      <Text></Text>
      <DeleteButton></DeleteButton>
    </View>
  );
}

function AddCourse({
  places,
  error,
  loading,
  fetchPlace,
  initPlace,
  selectPlace,
  selectedPlaces,
}) {
  // loading true 일경우 로딩중 표시
  React.useEffect(() => {
    // 추천 코스
    // 검색시 키워드 검색
    fetchPlace("keyword");
  }, []);
  return (
    <Container>
      <Search></Search>
      <FlatList
        style={{
          width: "100%",
          height: 50,
          backgroundColor: "#f5f5f5",
          padding: 15,
        }}
        data={selectedPlaces}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.index}
              style={{ height: 20, flexDirection: "row", marginRight: 15 }}
              onPress={() => {
                const idx = selectedPlaces.findIndex((e) => e.idx == item.idx);
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
                style={{ fontSize: 14, height: 20, color: theme.PRIMARY_COLOR }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 10,
                  height: 20,
                  color: "#aaa",
                }}
              >
                X
              </Text>
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
        style={{ width: "100%" }}
        data={places}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.index}
              style={{
                height: 60,
                paddingRight: 20,
                paddingLeft: 20,
                paddingTop: 15,
                paddingBottom: 15,
                flexDirection: "row",
              }}
              onPress={() => {
                if (selectedPlaces.findIndex((e) => e.idx == item.idx) == -1) {
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
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
}

export default connect(
  (state) => ({
    places: state.place.places,
    error: state.place.error,
    loading: state.place.loading,
    selectedPlaces: state.place.selectedPlaces,
  }),
  { fetchPlace, initPlace, selectPlace }
)(AddCourse);
