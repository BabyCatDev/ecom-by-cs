import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  TOKEN_CHANGED
} from "./types";
import apiInstance from "./Base";
import * as SecureStore from "expo-secure-store";

//Login
export const login = ({ username, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    apiInstance
      .post("/login", { username, password })
      .then(async response => {
        apiInstance.defaults.headers.common = {
          Authorization: "Bearer " + response.data.token
        };

        try {
          await SecureStore.setItemAsync("token", response.data.token);
          await SecureStore.setItemAsync("type", response.data.user.type);
        } catch (error) {
          throw new Error(error);
        }

        dispatch({ type: TOKEN_CHANGED });
        dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: LOGIN_USER_FAIL });
      });
  };
};

//Signup
export const signup = ({
  fullName,
  username,
  email,
  password,
  type,
  phone,
  place
}) => {
  return dispatch => {
    dispatch({ type: SIGNUP_USER });
    apiInstance
      .post("/user", {
        fullName,
        username,
        email,
        password,
        type,
        phone,
        place
      })
      .then(response => {
        dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data });
      })
      .catch(error => {
        aert(error);
        dispatch({ type: SIGNUP_USER_FAIL });
      });
  };
};

//Logout
export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
    apiInstance
      .post("/logout")
      .then(async () => {
        try {
          await SecureStore.deleteItemAsync("token");
          await SecureStore.deleteItemAsync("type");
        } catch (error) {
          throw new Error(error);
        }

        dispatch({ type: TOKEN_CHANGED });
        dispatch({ type: LOGOUT_USER_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: LOGOUT_USER_FAIL });
        console.log(error);
      });
  };
};
