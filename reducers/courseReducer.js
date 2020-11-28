import * as api from "../api/api.js";
import {setPost} from "./PostReducer";

export const types = {
  COURSE_INIT: "COURSE_INIT",
  COURSE_SET: "COURSE_SET",
  COURSE_SAVE_REQUEST: "COURSE_SAVE_REQUEST",
  COURSE_SAVE_SUCCESS: "COURSE_SAVE_SUCCESS",
  COURSE_SAVE_ERROR: "COURSE_SAVE_ERROR",
};

export function setCourse(course) {
  return {
    type: types.COURSE_SET,
    course
  }
}

export function requestSaveCourse(token, course) {
  return dispatch => {
    dispatch({type:types.COURSE_SAVE_REQUEST});
    return api
      .saveCourse(token, course)
      .then(json => {
        dispatch(setPost(json)); // warning
        dispatch(saveCourseSuccess());
      })
      .catch(error => dispatch(saveCourseError(error)));
  }
}

export function saveCourseSuccess(course){
  return {
    type:types.COURSE_SAVE_SUCCESS,
    course
  }
}

export function saveCourseError(error){
  return {
    type:types.COURSE_SAVE_ERROR,
    error
  }
}

export function initCourse() {
  return {
    type: types.COURSE_INIT,
  }
}


const defaultState =  {
  course:{
    nickName:"",
    likeNum: 0,
    commentNum:0,
    viewCount: 0,
    backgroundImg: null,
    postName: "",
    title:"",
    id: null,
    date: null,
    createdAt:null,
    shareType:"PUBLIC",
    places: [],
    memos: [],
    content:"",
    totalCost:0,
  },
  loading: false,
  error: null,
  uploaded:false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.COURSE_SET:
      return {
        ...state,
        course:action.course
      }
    case types.COURSE_SAVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.COURSE_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        uploaded: true,
        error: null,
      }
    case types.COURSE_SAVE_ERROR:
      return {
        ...state,
        loading: false,
        uploaded: true,
        error: action.error,
      }
    case types.COURSE_INIT:
      return {
        ...defaultState
      }
    case types.COURSE_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.COURSE_LOAD_SUCCESS:
      return {
        ...state,
        course: action.course,
        loading: false,
        error: null,
      }
    case types.COURSE_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        uploaded: true,
        error: action.error,
      }
    default:
      return state;
  }
}
