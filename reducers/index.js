import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import PlaceReducer from "./placeReducer";

export default combineReducers({
  course: CourseReducer,
  place: PlaceReducer,
});
