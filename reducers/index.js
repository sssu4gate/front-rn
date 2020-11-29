import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import PlaceReducer from "./placeReducer";
import PostReducer from "./postReducer";

export default combineReducers({
  course: CourseReducer,
  place: PlaceReducer,
  post: PostReducer,
});
