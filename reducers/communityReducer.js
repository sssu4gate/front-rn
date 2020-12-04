import * as api from "../api/api";
export const types = {
  COMMUNITY_TAB_MOVE: "COMMUNITY_TAB_MOVE",
  COMMUNITY_POST_MOVE: "COMMUNITY_POST_MOVE",
  COMMUNITY_MOVE_SUCCESS: "COMMUNITY_MOVE_SUCCESS",
  COMMUNITY_POST_LIST_REQUEST: "COMMUNITY_POST_LIST_REQUEST",
  COMMUNITY_POST_LIST_SUCCESS: "COMMUNITY_POST_LIST_SUCCESS",
  COMMUNITY_POST_LIST_ERROR: "COMMUNITY_POST_LIST_ERROR",
};

export function requestPostListCommunity(token, page, offset, option) {
  return (dispatch) => {
    dispatch({ type: types.COMMUNITY_POST_LIST_REQUEST, option, page, offset });
    return api
      .requestPostList(token, page, offset, option)
      .then((postList) => {
        dispatch(successPostListCommunity(option, postList));
      })
      .catch((error) => dispatch(errorPostListCommunity(error)));
  };
}

export function successPostListCommunity(option, postList) {
  return {
    type: types.COMMUNITY_POST_LIST_SUCCESS,
    postList,
    option,
  };
}
export function errorPostListCommunity(error) {
  return {
    type: types.COMMUNITY_POST_LIST_ERROR,
    error,
  };
}

export function moveCommunityTab(tab) {
  return {
    type: types.COMMUNITY_TAB_MOVE,
    tab,
  };
}

export function moveCommunityPost(id, tab) {
  return {
    type: types.COMMUNITY_POST_MOVE,
    id,
    tab,
  };
}

export function moveCommunitySuccess() {
  return {
    type: types.COMMUNITY_MOVE_SUCCESS,
  };
}

const defaultState = {
  tab: "Popularity", // Popularity, Trend, Loco
  id: 0,
  moved: true,
  postList: {
    LATEST: {
      postList: [],
      page: 1,
      offset: 5,
      loading: false,
    },
    LIKE: {
      postList: [],
      page: 1,
      offset: 5,
      loading: false,
    },
    REC: {
      postList: [],
      page: 1,
      offset: 5,
      loading: false,
    },
  },
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.COMMUNITY_TAB_MOVE:
      return {
        ...state,
        tab: action.tab,
        id: 0,
        moved: false,
      };
    case types.COMMUNITY_POST_MOVE:
      return {
        ...state,
        tab: action.tab ? action.tab : state.tab,
        id: action.id,
        moved: false,
      };
    case types.COMMUNITY_MOVE_SUCCESS:
      return {
        ...state,
        moved: true,
      };

    case types.COMMUNITY_POST_LIST_REQUEST:
      return {
        ...state,
        postList: {
          ...state.postList,
          [action.option]: {
            ...state.postList[action.option],
            page: action.page,
            offset: action.offset,
            loading: true,
          },
        },
        error: null,
      };
    case types.COMMUNITY_POST_LIST_SUCCESS:
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

    case types.COMMUNITY_POST_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
