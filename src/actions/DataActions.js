import {
  FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAIL,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_ADMINS,
  FETCH_ADMINS_SUCCESS,
  FETCH_ADMINS_FAIL,
  FETCH_SELLERS,
  FETCH_SELLERS_SUCCESS,
  FETCH_SELLERS_FAIL,
  FETCH_DELIVERIES,
  FETCH_DELIVERIES_SUCCESS,
  FETCH_DELIVERIES_FAIL
} from "./types";
import apiInstance from "./Base";

export const fetchCompanies = () => {
  return dispatch => {
    dispatch({ type: FETCH_COMPANIES });
    apiInstance
      .get(`/companies`)
      .then(async response => {
        dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_COMPANIES_FAIL });
        console.log(error);
      });
  };
};

export const fetchAdmins = () => {
  return dispatch => {
    dispatch({ type: FETCH_ADMINS });
    apiInstance
      .get(`/users?type=Administrateur`)
      .then(async response => {
        dispatch({ type: FETCH_ADMINS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_ADMINS_FAIL });
        console.log(error);
      });
  };
};

export const fetchSellers = () => {
  return dispatch => {
    dispatch({ type: FETCH_SELLERS });
    apiInstance
      .get(`/users?type=Commercial`)
      .then(async response => {
        dispatch({ type: FETCH_SELLERS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_SELLERS_FAIL });
        console.log(error);
      });
  };
};

export const fetchDeliveries = () => {
  return dispatch => {
    dispatch({ type: FETCH_DELIVERIES });
    apiInstance
      .get(`/users?type=Livreur`)
      .then(async response => {
        dispatch({ type: FETCH_DELIVERIES_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_DELIVERIES_FAIL });
        console.log(error);
      });
  };
};
