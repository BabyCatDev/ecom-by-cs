import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "./types";
import apiInstance from "./Base";
import { navigate, goBack } from "../navigations/RootNavigation";

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

//generatePassword
export const updatePassword = ({ id, generatedPassword }) => {
  return dispatch => {
    apiInstance
      .patch(`/password/${id}`, { password: generatedPassword })
      .then(response => {
        alert("Le mot de passe a été changé avec succès :)");
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//getUsers
export const addUser = ({
  type,
  fullName,
  username,
  email,
  phones,
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
        phones,
        place,
        password
      })
      .then(response => {
        dispatch(getUsers());
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
};
