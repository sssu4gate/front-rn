import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";

export default combineReducers({
  course: CourseReducer,
});
