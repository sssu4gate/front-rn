import * as api from "../api/api.js";

export const types = {
  USER_SET: "USER_SET",
  USER_INIT: "USER_INIT",
  USER_HANDLE_ERROR: "USER_HANDLE_ERROR",
  USER_HANDLE_REQUEST: "USER_HANDLE_REQUEST",

  USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR: "USER_LOGIN_ERROR",

  USER_SIGNUP_SUCCESS: "USER_SIGNUP_SUCCESS",

  USER_NAMECHK_SUCCESS: "USER_NAMECHK_SUCCESS",
  USER_NAMECHK_ERROR: "USER_NAMECHK_ERROR",

  USER_PROFILE_SUCCESS: "USER_PROFILE_SUCCESS",
  USER_POST_LIST_REQUEST: "USER_POST_LIST_REQUEST",
  USER_POST_LIST_SUCCESS: "USER_POST_LIST_SUCCESS",
  USER_POST_LIST_ERROR: "USER_POST_LIST_ERROR",
};

export function requestUserPostListCommunity(token, page, offset, option, startDate="", endDate="") {
  return (dispatch) => {
    dispatch({ type: types.USER_POST_LIST_REQUEST, option, page, offset, startDate, endDate });
    return api
      .requestUserPostList(token, page, offset, option, startDate, endDate)
      .then((postList) => {
        dispatch(successUserPostListCommunity(option, postList));
      })
      .catch((error) => dispatch(errorUserPostListCommunity(error)));
  };
}

export function successUserPostListCommunity(option, postList) {
  return {
    type: types.USER_POST_LIST_SUCCESS,
    postList,
    option,
  };
}

export function errorUserPostListCommunity(error) {
  return {
    type: types.USER_POST_LIST_ERROR,
    error,
  };
}


export function setUser(user) {
  return {
    type: types.USER_SET,
    user,
  };
}

export function initUser() {
  return {
    type: types.USER_INIT,
  };
}

export function handleUserError(error) {
  console.log("handle error");
  return {
    type: types.USER_HANDLE_ERROR,
    error,
  };
}

export function handleUserRequest() {
  return {
    type: types.USER_HANDLE_REQUEST,
  };
}

export function loginCheckedSuccess(user) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    ...user,
    isSigned: "signed",
  };
}

export function requestCheckLoginedUser() {
  return (dispatch) => {
    return api
      .checkLoginedUser()
      .then((json) => {
        if (json) {
          dispatch(loginCheckedSuccess(json));
        } else console.log("Not yet logined");
      })
      .catch((error) => console.log(error));
  };
}

export function requestLoginUser(user) {
  return (dispatch) => {
    dispatch({
      type: types.USER_LOGIN_REQUEST,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    });
    return api
      .loginUser(user)
      .then((json) => {
        dispatch(loginUserSuccess(json));
      })
      .catch((error) => dispatch(loginUserError(error)));
  };
}

export function loginUserSuccess(user) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    ...user,
  };
}

// "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

export function loginUserError(error) {
  return {
    type: types.USER_LOGIN_ERROR,
    error,
    isSigned: "unsigned",
  };
}

export function requestSignupUser(user) {
  return (dispatch) => {
    dispatch({ type: types.USER_HANDLE_REQUEST });
    console.log("requst signup");
    return api
      .signupUser(user)
      .then((json) => {
        console.log("api end");
        console.log(json);
        if (json?.accessToken) dispatch(signupUserSuccess(json));
        else dispatch(handleUserError(error));
      })
      .catch((error) => dispatch(handleUserError(error)));
  };
}

export function signupUserSuccess(user) {
  console.log("signup success");
  console.log(user);
  return {
    type: types.USER_SIGNUP_SUCCESS,
    isSigned: "signed",
    ...user,
  };
}

export function requestNamechkUser(nickName) {
  return (dispatch) => {
    dispatch({ type: types.USER_HANDLE_REQUEST });
    return api
      .namechkUser(nickName)
      .then((json) => {
        dispatch(namechkUserSuccess(json));
      })
      .catch((error) => dispatch(namechkUserError(error)));
  };
}

export function namechkUserSuccess(boolean) {
  return {
    type: types.USER_NAMECHK_SUCCESS,
    nameChecked: boolean,
  };
}

export function namechkUserError(error) {
  return {
    type: types.USER_NAMECHK_ERROR,
    error,
    nameChecked: false,
  };
}

export function requestProfileUser(user) {
  return (dispatch) => {
    dispatch({ type: types.USER_HANDLE_REQUEST });
    return api
      .profileUser(user)
      .then((json) => {
        dispatch(profileUserSuccess(json));
      })
      .catch((error) => dispatch(handleUserError(error)));
  };
}

export function profileUserSuccess(user) {
  return {
    type: types.USER_PROFILE_SUCCESS,
    user,
  };
}

const defaultState = {
  accessToken: "",
  refreshToken: "",
  birth: "",
  gender: "",
  id: 0,
  likeNum: 0,
  nickName: "",
  userImgUrl: "",
  loading: false,
  error: null,
  isSigned: "unsigned", // unsigned, singed
  nameChecked: false,
  area: [],
  postList: {
    "WRITE":{
      postList: [],
      page: 1,
      offset: 5,
      loading: false,
    },
    "LIKE":{
      postList: [],
      page: 1,
      offset: 5,
      loading: false
    },
    "DATE":{
      postList: [],
      page: 1,
      offset: 5,
      loading: false,
      startDate:"",
      endDate:"",
    }
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.USER_SET:
      return {
        ...state,
        ...action.user,
      };
    case types.USER_INIT:
      return {
        ...defaultState,
      };
    case types.USER_HANDLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.USER_HANDLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        refreshToken: action.refreshToken,
        accessToken: action.accessToken,
        loading: true,
        error: null,
      };
    case types.USER_LOGIN_SUCCESS:
      console.log("LOGIN Success", action);
      return {
        ...state,
        loading: false,
        error: null,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isSigned: action.isSigned,
        id: action.id,
        birth: action.birth,
        gender: action.gender,
        likeNum: action.likeNum,
        nickName: action.nickName,
        userImgUrl: action.userImgUrl,
      };
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        isSigned: action.isSigned,
      };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isSigned: action.isSigned,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        birth: action.birth,
        gender: action.gender,
        likeNum: action.likeNum,
        nickName: action.nickName,
        userImgUrl: action.userImgUrl,
      };
    case types.USER_NAMECHK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        nameChecked: action.nameChecked,
      };
    case types.USER_NAMECHK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        nameChecked: action.nameChecked,
      };
    case types.USER_PROFILE_SUCCESS:
      return {
        ...state,
        nickName: action.user.nickName,
        gender: action.user.gender,
        birth: action.user.birth,
        area: action.user.area,
        loading: false,
        error: null,
      };

  case types.USER_POST_LIST_REQUEST:
      return {
        ...state,
        postList: {
          ...state.postList,
          [action.option]: {
            ...state.postList[action.option],
            page: action.page,
            offset: action.offset,
            loading: true,
            startDate:action.startDate,
            endDate:action.endDate,
          },
        },
        error: null,
      };
  case types.USER_POST_LIST_SUCCESS:
      return {
        ...state,
        postList: {
          ...state.postList,
          [action.option]: {
            ...state.postList[action.option],
            postList: action.postList,
            loading: false,
          },
        },
        error: null,
      };
  case types.USER_POST_LIST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
