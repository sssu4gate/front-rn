import { combineReducers } from "redux";
import CourseReducer from "./courseReducer";
import PlaceReducer from "./placeReducer";
import PostReducer from "./postReducer";
import TopBarReducer from "./topBarReducer";
import UserReducer from "./userReducer";
import CommunityReducer from "./communityReducer";
import RefreshReducer from "./refreshReducer";

export default combineReducers({
  course: CourseReducer,
  place: PlaceReducer,
  post: PostReducer,
  topBar: TopBarReducer,
  user: UserReducer,
  community: CommunityReducer,
  refresh: RefreshReducer,
});
