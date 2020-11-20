import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import LocationReducer from "./locationReducer";

export default combineReducers({
  course: CourseReducer,
  location: LocationReducer,
});
