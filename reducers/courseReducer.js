import * as api from "../api/api.js";

export const types = {
  COURSE_SEARCH_REQUEST: "COURSE_SEARCH_REQUEST",
  COURSE_SEARCH_SUCCESS: "COURSE_SEARCH_SUCCESS",
  COURSE_SEARCH_ERROR: "COURSE_SEARCH_ERROR",
  COURSE_UPLOAD_REQUEST: "COURSE_UPLOAD_REQUEST",
  COURSE_UPLOAD_SUCCESS: "COURSE_UPLOAD_SUCCESS",
  COURSE_UPLOAD_ERROR: "COURSE_UPLOAD_ERROR",
  COURSE_FETCH_REQUEST: "COURSE_FETCH_REQUEST",
  COURSE_FETCH_SUCCESS: "COURSE_FETCH_SUCCESS",
  COURSE_FETCH_ERROR: "COURSE_FETCH_ERROR",
  COURSE_SET: "COURSE_SET",
  COURSE_LOAD: "COURSE_LOAD",
};

export function setCourse(course) {
  return {
    type: types.COURSE_SET,
    course
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
    sharing: false,
    places: [],
    memos: [],
  },
  loading: false,
  error: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.COURSE_SET:
      return {
        ...state,
        course:action.course
      }
    default:
      return state;
  }
}
