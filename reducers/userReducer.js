import * as api from "../api/api.js";

export const types = {
  USER_SET: "USER_SET",
  USER_INIT: "USER_INIT",
  USER_HANDLE_ERROR:"USER_HANDLE_ERROR",
  USER_HANDLE_REQUEST:"USER_HANDLE_REQUEST",

  USER_LOGIN_REQUEST:"USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR: "USER_LOGIN_ERROR",

  USER_SIGNUP_SUCCESS: "USER_SIGNUP_SUCCESS",

  USER_NAMECHK_SUCCESS: "USER_NAMECHK_SUCCESS",
  USER_NAMECHK_ERROR: "USER_NAMECHK_ERROR",

  USER_PROFILE_SUCCESS:"USER_PROFILE_SUCCESS",
};

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

export function requestLoginUser(user) {
  return (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST, accessToken:user.accessToken, refreshToken:user.refreshToken });
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
    isSigned:user?.statusCode==404?'unsigned':'signed'
  };
}

export function loginUserError(error) {
  return {
    type: types.USER_LOGIN_ERROR,
    error,
    isSigned:'unsigned'
  };
}

export function requestSignupUser(user) {
  return (dispatch) => {
    dispatch({ type: types.USER_HANDLE_REQUEST });
    return api
      .signupUser(user)
      .then((json) => {
        if(json?.accessToken)
          dispatch(signupUserSuccess(json));
        else
          dispatch(handleUserError(error));
      })
      .catch((error) => dispatch(handleUserError(error)));
  };
}

export function signupUserSuccess({accessToken, refreshToken}) {
  return {
    type: types.USER_SIGNUP_SUCCESS,
    isSigned:'signed',
    accessToken,
    refreshToken
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
    nameChecked:boolean
  };
}

export function namechkUserError(error) {
  return {
    type: types.USER_NAMECHK_ERROR,
    error,
    nameChecked:false,
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
  accessToken:'',
  refreshToken:'',
  jwtToken:'',
  birth:'',
  gender:'',
  id:0,
  nickName:'',
  thumbnailImageUrl:'',
  profileImageUrl:'',
  loading: false,
  error: null,
  isSigned:'unsigned', // unsigned, singed
  nameChecked:false,
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
        refreshToken:action.refreshToken,
        accessToken:action.accessToken,
        loading: true,
        error: null,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        accessToken:action.accessToken,
        refreshToken:action.refreshToken,
        isSigned:action.isSigned, 

        id:action?.id, 
        nickName:action.kakao_account?.profile.nickname,
        thumbnailImageUrl:action.kakao_account?.profile.thumbnail_image_url,
        profileImageUrl:action.kakao_account?.profile.profile_image_url,
      };
    case types.USER_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        isSigned:action.isSigned
      };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isSigned:action.isSigned,
        accessToken:action.accessToken,
        refreshToken:action.refreshToken
      }
    case types.USER_NAMECHK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        nameChecked:action.nameChecked
      }
    case types.USER_NAMECHK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        nameChecked:action.nameChecked
      }
    case types.USER_PROFILE_SUCCESS:
      return {
        ...state,
        nickName:action.user.nickName,
        gender:action.user.gender,
        birth:action.user.birth,
        loading: false,
        error: null,
      }
    default:
      return state;
  }
}
