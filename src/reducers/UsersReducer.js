import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  loadingUsers: false
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
      return INITIAL_STATE;
    default:
      return state;
  }
};
