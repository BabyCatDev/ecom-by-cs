import {
  DELIVERY_STATS,
  DELIVERY_STATS_SUCCESS,
  DELIVERY_STATS_FAIL,
  LOGOUT_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  stats: {},
  loadingStats: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELIVERY_STATS:
      return {
        ...state,
        loadingStats: true
      };
    case DELIVERY_STATS_SUCCESS:
      return {
        ...state,
        stats: action.payload,
        loadingStats: false
      };
    case DELIVERY_STATS_FAIL:
      return {
        ...state,
        loadingStats: false
      };
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
