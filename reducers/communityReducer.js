export const types = {
  COMMUNITY_TAB_MOVE:"COMMUNITY_TAB_MOVE",
  COMMUNITY_POST_MOVE:"COMMUNITY_POST_MOVE",
  COMMUNITY_MOVE_SUCCESS:"COMMUNITY_MOVE_SUCCESS",
};

export function moveCommunityTab(tab) {
  return {
    type:types.COMMUNITY_TAB_MOVE,
    tab
  }
}

export function moveCommunityPost(id, tab) {
  return {
    type:types.COMMUNITY_POST_MOVE,
    id,
    tab
  }
}

export function moveCommunitySuccess(){
  return {
    type:types.COMMUNITY_MOVE_SUCCESS,
  }
}

const defaultState = {
  tab:"Popularity", // Popularity, Trend, Loco
  id:0,
  moved:true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.COMMUNITY_TAB_MOVE:
      return {
        tab:action.tab,
        id:0,
        moved:false,
      };
    case types.COMMUNITY_POST_MOVE:
      return {
        tab:action.tab?action.tab:state.tab,
        id:action.id,
        moved:false,
      };
    case types.COMMUNITY_MOVE_SUCCESS:
      return {
        ...state,
        moved:true,
      };
    default:
      return state;
  }
}
