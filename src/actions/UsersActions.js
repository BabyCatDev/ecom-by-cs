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

//delete User
export const deleteUser = ({ userId }) => {
  return dispatch => {
    apiInstance
      .delete(`/user/${userId}`)
      .then(response => {
        dispatch(getUsers());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//update User
export const updateUser = ({
  userId,
  type,
  fullName,
  email,
  phones,
  place
}) => {
  return dispatch => {
    apiInstance
      .patch(`/user/${userId}`, { type, fullName, email, phones, place })
      .then(response => {
        dispatch(getUsers());
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
};
