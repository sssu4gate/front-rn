import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";

export default function initStore() {
  const store = createStore(reducers, applyMiddleware());
  return store;
}
