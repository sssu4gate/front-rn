import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styled from "styled-components/native";
import Search from "../../components/Search";
import {
  requestPlace,
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
  requestPlace,
  initPlace,
  selectPlace,
  selectedPlaces,
  navigation,
  token=""
}) {
  // loading true 일경우 로딩중 표시
  React.useEffect(() => {
    // 추천 코스
    // 검색시 키워드 검색
    requestPlace(token, "keyword");
  }, []);
  return (
    <Container>
      <Search></Search>
      <FlatList
        style={{
          width: "100%",
          height: 50,
          maxHeight:50, 
          backgroundColor: "#f5f5f5",
          padding: 15,
        }}
        data={selectedPlaces}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{ height: 20, flexDirection: "row", marginRight: 15 }}
              onPress={() => {
                const idx = selectedPlaces.findIndex((e) => e.id == item.id);
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
                {item.place_name}
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
        style={{ width: "100%", marginBottom:80 }}
        data={places}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                height: 60,
                paddingRight: 20,
                paddingLeft: 20,
                paddingTop: 15,
                paddingBottom: 15,
                flexDirection: "row",
              }}
              onPress={() => {
                if (selectedPlaces.findIndex((e) => e.id == item.id) == -1) {
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
      <TouchableOpacity style={{position:"fixed", bottom:70, left:"5vw", width:"90vw", height:40, backgroundColor:theme.PRIMARY_COLOR, borderRadius:10, justifyContent:"center", alignItems:"center"}}
        onPress={()=>navigation.goBack()}
      >
        <Text style={{fontSize:16, fontWeight:"bold", color:"#fff", backgroundColor:theme.PRIMARY_COLOR}}>장소 추가하기</Text>
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
  }),
  { requestPlace, initPlace, selectPlace }
)(AddCourse);
