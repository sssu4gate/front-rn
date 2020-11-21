import fetch from "node-fetch-npm";
import * as api from "../api/api.js";

export const types = {
  LOCATION_SEARCH_REQUEST: "LOCATION_SEARCH_REQUEST",
  LOCATION_SEARCH_SUCCESS: "LOCATION_SEARCH_SUCCESS",
  LOCATION_SEARCH_ERROR: "LOCATION_SEARCH_ERROR",
  LOCATION_INIT : "LOCATION_INIT",
  LOCATION_LOAD : "LOCATION_LOAD",
  LOCATION_SELECT : "LOCATION_SELECT"
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

export function searchLocationSuccess(locations) {
  return {
    type: types.LOCATION_SEARCH_SUCCESS,
    locations
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

export function loadSelectedLocation() {
  return {
    type: types.LOCATION_LOAD
  }
}

export function selectLocation(selectedLocations) {
  return {
    type: types.LOCATION_SELECT,
    selectedLocations
  }
}

const defaultState = {
  locations: [],
  selectedLocations:[],
  loading: false,
  error: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOCATION_INIT:
      return {
        locations:[] 
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
        locations: action.locations,
        loading:false,
        error:null
      }
    case types.LOCATION_SEARCH_ERROR:
      return {
        ...state,
        loading:false,
        error:action.error
      }
    case types.LOCATION_LOAD:
      return {
        ...state,
      }
    case types.LOCATION_SELECT:
      return {
        ...state,
        selectedLocations:action.selectedLocations
      }
    default:
      return state;
  }
};
