import * as api from "../api/api.js";

export const types = {
  PLACE_SEARCH_REQUEST: "PLACE_SEARCH_REQUEST",
  PLACE_SEARCH_SUCCESS: "PLACE_SEARCH_SUCCESS",
  PLACE_SEARCH_ERROR: "PLACE_SEARCH_ERROR",
  PLACE_INIT : "PLACE_INIT",
  PLACE_LOAD : "PLACE_LOAD",
  PLACE_SELECT : "PLACE_SELECT"
};

export function fetchPlace(keyword){
  return dispatch => {
    dispatch(searchPlaceRequest());
    return api.searchPlace(keyword)
      .then(json=>{
        return dispatch(searchPlaceSuccess(json))
      })
      .catch(error=>dispatch(searchPlaceError(error)))
  };
}

export function searchPlaceRequest() {
  return {
    type: types.PLACE_SEARCH_REQUEST,
  }
}

export function searchPlaceSuccess(places) {
  return {
    type: types.PLACE_SEARCH_SUCCESS,
    places
  }
}

export function searchPlaceError(error) {
  return {
    type: types.PLACE_SEARCH_ERROR,
    error
  }
}

export function initPlace() {
  return {
    type: types.PLACE_INIT
  }
}

export function loadSelectedPlace() {
  return {
    type: types.PLACE_LOAD
  }
}

export function selectPlace(selectedPlaces) {
  return {
    type: types.PLACE_SELECT,
    selectedPlaces
  }
}

const defaultState = {
  places: [],
  selectedPlaces:[],
  loading: false,
  error: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.PLACE_INIT:
      return {
        ...state, 
        places:[] 
      }
    case types.PLACE_SEARCH_REQUEST:
      return {
        ...state,
        loading:true,
        error:null
      }
    case types.PLACE_SEARCH_SUCCESS:
      return {
        ...state,
        places: action.places,
        loading:false,
        error:null
      }
    case types.PLACE_SEARCH_ERROR:
      return {
        ...state,
        loading:false,
        error:action.error
      }
    case types.PLACE_LOAD:
      return {
        ...state,
      }
    case types.PLACE_SELECT:
      return {
        ...state,
        selectedPlaces:action.selectedPlaces
      }
    default:
      return state;
  }
};
