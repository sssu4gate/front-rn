import * as api from "../api/api.js";
import * as theme from "../assets/theme";

export const types = {
  OPTION_SET:"OPTION_SET",
  OPTION_INIT:"OPTION_INIT"
};

export function setOption(option) {
  return {
    type: types.OPTION_SET,
    option
  }
}

export function initOption() {
  return {
    type: types.OPTION_INIT,
  }
}

const defaultState={
  backgroundColor:"#fff",
  titleColor: theme.PRIMARY_COLOR,
  leftButton:"menu",
  nested:false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.OPTION_SET:
      return {
        ...state,
        ...action.option,
        nested:true,
      }
    case types.OPTION_INIT:
      return {
        ...defaultState,
        nested:false
      }
    default:
      return state;
  }
}
