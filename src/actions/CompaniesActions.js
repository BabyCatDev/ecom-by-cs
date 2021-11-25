import {
  FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAIL,
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAIL,
  SELECT_COMPANY,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from "./types";
import apiInstance from "./Base";
import { navigate, goBack } from "../navigations/RootNavigation";

export const fetchCompanies = companyId => {
  return dispatch => {
    dispatch({ type: FETCH_COMPANIES });
    apiInstance
      .get(`/companies`)
      .then(async response => {
        dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: response.data });
        if (companyId) {
          dispatch(selectCompany({ companyId: companyId }));
        }
      })
      .catch(error => {
        dispatch({ type: FETCH_COMPANIES_FAIL });
        console.log(error);
      });
  };
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS });
    apiInstance
      .get(`/products`)
      .then(async response => {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_PRODUCTS_FAIL });
        console.log(error);
      });
  };
};

export const addCompany = ({ name }) => {
  return dispatch => {
    dispatch({ type: ADD_COMPANY });
    apiInstance
      .post(`/company`, { name })
      .then(async response => {
        dispatch(fetchCompanies());
        goBack();
        dispatch({ type: ADD_COMPANY_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ADD_COMPANY_FAIL });
        console.log(error);
      });
  };
};

export const addProduct = ({ name, price, companyId }) => {
  return dispatch => {
    apiInstance
      .post(`/product`, { name, price, companyId })
      .then(async response => {
        dispatch(fetchCompanies(companyId));
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const selectCompany = ({ companyId }) => {
  return dispatch => {
    dispatch({ type: SELECT_COMPANY, payload: companyId });
  };
};
