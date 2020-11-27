import * as api from "../api/api.js";

export const types = {
  COURSE_SEARCH_REQUEST: "COURSE_SEARCH_REQUEST",
  COURSE_SEARCH_SUCCESS: "COURSE_SEARCH_SUCCESS",
  COURSE_SEARCH_ERROR: "COURSE_SEARCH_ERROR",
  COURSE_FETCH_REQUEST: "COURSE_FETCH_REQUEST",
  COURSE_FETCH_SUCCESS: "COURSE_FETCH_SUCCESS",
  COURSE_FETCH_ERROR: "COURSE_FETCH_ERROR",
  COURSE_INIT: "COURSE_INIT",
  COURSE_SAVE_REQUEST: "COURSE_SAVE_REQUEST",
  COURSE_SAVE_SUCCESS: "COURSE_SAVE_SUCCESS",
  COURSE_SAVE_ERROR: "COURSE_SAVE_ERROR",
  COURSE_SET: "COURSE_SET",
  COURSE_LOAD: "COURSE_LOAD",
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
        dispatch(saveCourseSuccess(json));
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
    user: {
      img: null,
      name: null,
    },
    heartCount: 0,
    viewCount: 0,
    backgroundImg: null,
    courseName: "코스",
    id: null,
    date: null,
    createdAt:null,
    sharing: true,
    places: [],
    memos: [],
    content:"",
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
        course: action.course,
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
    default:
      return state;
  }
}
