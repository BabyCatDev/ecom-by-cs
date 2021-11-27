import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_USER_STATS,
  FETCH_USER_STATS_SUCCESS,
  FETCH_USER_STATS_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  userStats: {},
  loadingUsers: false,
  loadingUserStats: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loadingUsers: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loadingUsers: false
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loadingUsers: false
      };
    case FETCH_USER_STATS:
      return {
        ...state,
        userStats: action.payload,
        loadingUserStats: true
      };
    case FETCH_USER_STATS_SUCCESS:
      return {
        ...state,
        userStats: action.payload,
        loadingUserStats: false
      };
    case FETCH_USER_STATS_FAIL:
      return {
        ...state,
        loadingUserStats: false
      };
      return INITIAL_STATE;
    default:
      return state;
  }
};
