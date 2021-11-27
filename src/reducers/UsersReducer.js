import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  FETCH_USER_STATS,
  FETCH_USER_STATS_SUCCESS,
  FETCH_USER_STATS_FAIL,
  FETCH_PRODUCT_STATS,
  FETCH_PRODUCT_STATS_SUCCESS,
  FETCH_PRODUCT_STATS_FAIL,
  LOGOUT_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  userStats: {},
  productStats: {},
  loadingProductStats: false,
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
    case FETCH_PRODUCT_STATS:
      return {
        ...state,
        productStats: action.payload,
        loadingProductStats: true
      };
    case FETCH_PRODUCT_STATS_SUCCESS:
      return {
        ...state,
        productStats: action.payload,
        loadingProductStats: false
      };
    case FETCH_PRODUCT_STATS_FAIL:
      return {
        ...state,
        loadingProductStats: false
      };
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
