import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import PlaceReducer from "./placeReducer";
import ProfileReducer from "./profileReducer";

export default combineReducers({
  course: CourseReducer,
  place: PlaceReducer,
  profile: ProfileReducer,
});
