import "react-native-gesture-handler";
import * as React from "react";
import Container from "./screens/Container";
import { Provider } from "react-redux";
import initStore from "./store";

const store = initStore();

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
