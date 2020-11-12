import types from "../actions/types";

const defaultState = {
  courses: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.COURSE_ADD:
      return {
        // ...state,
        courses: action.course + state.courses,
      };
    default:
      return state;
  }
};
