import * as api from "../api/api.js";

export const types = {
  POST_SEARCH_REQUEST: "POST_SEARCH_REQUEST",
  POST_SEARCH_SUCCESS: "POST_SEARCH_SUCCESS",
  POST_SEARCH_ERROR: "POST_SEARCH_ERROR",
  POST_LOAD_REQUEST: "POST_LOAD_REQUEST",
  POST_LOAD_SUCCESS: "POST_LOAD_SUCCESS",
  POST_LOAD_ERROR: "POST_LOAD_ERROR",
  POST_SAVE_REQUEST: "POST_SAVE_REQUEST",
  POST_SAVE_SUCCESS: "POST_SAVE_SUCCESS",
  POST_SAVE_ERROR: "POST_SAVE_ERROR",
  POST_SET: "POST_SET",
  POST_INIT: "POST_INIT",
};

export function setPost(post) {
  return {
    type: types.POST_SET,
    post,
  };
}

export function requestLoadPost(token, id) {
  return (dispatch) => {
    dispatch({ type: types.POST_LOAD_REQUEST });
    return api
      .loadPost(token, id)
      .then((json) => {
        dispatch(loadPostSuccess(json));
      })
      .catch((error) => dispatch(loadPostError(error)));
  };
}

export function loadPostSuccess(post) {
  return {
    type: types.POST_LOAD_SUCCESS,
    post,
  };
}

export function loadPostError(error) {
  return {
    type: types.POST_LOAD_ERROR,
    error,
  };
}

export function requestSavePost(token, post) {
  return (dispatch) => {
    dispatch({ type: types.POST_SAVE_REQUEST });
    return api
      .savePost(token, post)
      .then((json) => {
        dispatch(setPost(json));
        dispatch(savePostSuccess());
      })
      .catch((error) => dispatch(savePostError(error)));
  };
}

export function savePostSuccess(post) {
  return {
    type: types.POST_SAVE_SUCCESS,
    post,
  };
}

export function savePostError(error) {
  return {
    type: types.POST_SAVE_ERROR,
    error,
  };
}

export function initPost() {
  return {
    type: types.POST_INIT,
  };
}

const defaultState = {
  post: {
    nickName: "",
    likeNum: 0,
    commentNum: 0,
    viewCount: 0,
    backgroundImg: null,
    postName: "",
    title: "",
    id: null,
    date: null,
    createdAt: null,
    shareType: "PUBLIC",
    places: [],
    memos: [],
    content: "",
    totalCost: 0,
  },
  loading: false,
  error: null,
  uploaded: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.POST_SET:
      return {
        ...state,
        post: action.post,
      };
    case types.POST_INIT:
      return {
        ...defaultState,
      };
    case types.POST_LOAD_REQUEST:
      return {
        ...defaultState,
        loading: true,
        error: null,
      };
    case types.POST_LOAD_SUCCESS:
      return {
        ...state,
        post: action.post,
        loading: false,
        error: null,
      };
    case types.POST_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        uploaded: true,
        error: action.error,
      };
    default:
      return state;
  }
};
