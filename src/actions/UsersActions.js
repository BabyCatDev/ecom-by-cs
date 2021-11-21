import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "./types";
import apiInstance from "./Base";
import { navigate } from "../navigations/RootNavigation";

//getUsers
export const getUsers = () => {
  return dispatch => {
    dispatch({ type: FETCH_USERS });
    apiInstance
      .get("/users")
      .then(response => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_USERS_FAIL });
      });
  };
};

//getUsers
export const addUser = ({
  type,
  fullName,
  username,
  email,
  phone,
  place,
  password
}) => {
  return dispatch => {
    apiInstance
      .post("/user", {
        type,
        fullName,
        username,
        email,
        phone,
        place,
        password
      })
      .then(response => {
        dispatch(getUsers());
        navigate("Personnels");
      })
      .catch(error => {
        console.log(error);
      });
  };
};