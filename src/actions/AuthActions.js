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
  TOKEN_CHANGED,
  SAVE_PROFILE
} from "./types";
import apiInstance from "./Base";
import * as SecureStore from "expo-secure-store";
import { registerForPushNotificationsAsync } from "../helpers";

//Login
export const login = ({ username, password }) => {
  return async dispatch => {
    dispatch({ type: LOGIN_USER });
    const pushToken = await registerForPushNotificationsAsync();
    apiInstance
      .post("/login", { username, password, pushToken })
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
        alert("Indentifiant ou mot de passe incorrect");
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
        alert("Vous avez inséré une valeur incorrecte");
        dispatch({ type: SIGNUP_USER_FAIL });
      });
  };
};

//Logout
export const logout = () => {
  return async dispatch => {
    dispatch({ type: LOGOUT_USER });

    const pushToken = await registerForPushNotificationsAsync();
    apiInstance
      .post("/logout", { pushToken })
      .then(() => {
        dispatch({ type: LOGOUT_USER_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: LOGOUT_USER_FAIL });
        console.log(error);
      })
      .finally(async () => {
        try {
          await SecureStore.deleteItemAsync("token");
          await SecureStore.deleteItemAsync("type");
        } catch (error) {
          throw new Error(error);
        }
        dispatch({ type: TOKEN_CHANGED });
      });
  };
};
//getProfile
export const getProfile = () => {
  return dispatch => {
    apiInstance
      .get("/user")
      .then(async response => {
        dispatch({ type: SAVE_PROFILE, payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
