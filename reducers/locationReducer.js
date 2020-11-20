import fetch from "node-fetch-npm";
import * as api from "../api/api.js";

export const types = {
  LOCATION_SEARCH_REQUEST: "LOCATION_SEARCH_REQUEST",
  LOCATION_SEARCH_SUCCESS: "LOCATION_SEARCH_SUCCESS",
  LOCATION_SEARCH_ERROR: "LOCATION_SEARCH_ERROR",
  LOCATION_INIT : "LOCATION_INIT"
};

export function fetchLocation(keyword){
  return dispatch => {
    dispatch(searchLocationRequest());
    return api.searchLocation(keyword)
      .then(json=>{
        return dispatch(searchLocationSuccess(json))
      })
      .catch(error=>dispatch(searchLocationError(error)))
  };
}

export function searchLocationRequest() {
  return {
    type: types.LOCATION_SEARCH_REQUEST,
  }
}

export function searchLocationSuccess(locationList) {
  return {
    type: types.LOCATION_SEARCH_SUCCESS,
    locationList
  }
}

export function searchLocationError(error) {
  return {
    type: types.LOCATION_SEARCH_ERROR,
    error
  }
}

export function initLocation() {
  return {
    type: types.LOCATION_INIT
  }
}

const defaultState = {
  locationList: [],
  loading: false,
  error: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOCATION_INIT:
      return {
        locationList:[] 
      }
    case types.LOCATION_SEARCH_REQUEST:
      return {
        ...state,
        loading:true,
        error:null
      }
    case types.LOCATION_SEARCH_SUCCESS:
      return {
        ...state,
        locationList: action.locationList,
        loading:false,
        error:null
      }
    case types.LOCATION_SEARCH_ERROR:
      return {
        ...state,
        loading:false,
        error:action.error
      }
    default:
      return state;
  }
};
