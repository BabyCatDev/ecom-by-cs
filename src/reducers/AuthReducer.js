import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  LOGOUT_USER_SUCCESS,
  SAVE_PROFILE,
  TOKEN_CHANGED,
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  error: "",
  loading: false,
  isTokenChanged: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isTokenChanged: false,
        error: "",
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: "Authentication Failed.",
      };
    case SIGNUP_USER:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isTokenChanged: false,
      };
    case SIGNUP_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: "Authentication Failed.",
      };
    case SAVE_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    case TOKEN_CHANGED:
      return { ...state, isTokenChanged: true };
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
