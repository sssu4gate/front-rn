import * as api from "../api/api.js";

export const types = {
  PROFILE_INIT: "PROFILE_INIT",
  PROFILE_LOAD: "PROFILE_LOAD",
  PROFILE_SAVE_REQUEST: "PROFILE_SAVE",
  PROFILE_SAVE_SUCCESS: "PROFILE_SAVE_SUCCESS",
  PROFILE_SAVE_ERROR: "PROFILE_SAVE_ERROR",
};

export function initProfile() {
  return {
    type: types.PROFILE_INIT,
  };
}

export function loadProfile() {
  return {
    type: types.PROFILE_LOAD,
  };
}

export function saveProfileSuccess(profile) {
  return {
    type: types.PROFILE_SAVE_SUCCESS,
    profile,
  };
}

export function saveProfileError(error) {
  return {
    type: types.PROFILE_SAVE_ERROR,
    error,
  };
}

const gender = "M" | "F" | "none";

const defaultState = {
  profile: {
    id: -1,
    nickName: "",
    birth: "",
    gender: "none",
    interestArea: "",
  },
  loading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.PROFILE_INIT:
      return {
        ...state,
        profile,
      };
    case types.PROFILE_LOAD:
      return {
        ...state,
      };
    case types.PROFILE_SAVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.PROFILE_SAVE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        loading: false,
        error: null,
      };
    case types.PROFILE_SAVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
