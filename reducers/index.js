import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import PlaceReducer from "./placeReducer";
import ProfileReducer from "./profileReducer";
import PostReducer from "./postReducer";
import TopBarReducer from "./topBarReducer";


export default combineReducers({
  course: CourseReducer,
  place: PlaceReducer,
  profile: ProfileReducer,
  post: PostReducer,
  topBar: TopBarReducer,
});
