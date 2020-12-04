export const types = {
  REFRESH_SET: "REFRESH_SET",
};

export function setRefresh(refresh) {
  return {
    type: types.REFRESH_SET,
    refresh,
  };
}

const defaultState = {
  currentTab: "Home",
  Home: true,
  Community: true,
  MyProfile: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.REFRESH_SET:
      return {
        ...action.refresh,
      };
    default:
      return state;
  }
};
