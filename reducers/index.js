import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import PlaceReducer from "./placeReducer";
import ProfileReducer from "./profileReducer";
import PostReducer from "./postReducer";
import TopBarReducer from "./topBarReducer";
import UserReducer from "./userReducer";
import CommunityReducer from "./communityReducer";

export default combineReducers({
  course: CourseReducer,
  place: PlaceReducer,
  profile: ProfileReducer,
  post: PostReducer,
  topBar: TopBarReducer,
  user:UserReducer,
  community:CommunityReducer,
});
