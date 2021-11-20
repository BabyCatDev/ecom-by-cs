import {
  FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAIL,
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAIL
} from "./types";
import apiInstance from "./Base";
import { navigate } from "../navigations/RootNavigation";

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

export const addCompany = ({ name }) => {
  return dispatch => {
    dispatch({ type: ADD_COMPANY });
    apiInstance
      .post(`/company`, { name })
      .then(async response => {
        dispatch(fetchCompanies());
        navigate("Commerces");
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
    // dispatch({ type: ADD_COMPANY });
    apiInstance
      .post(`/product`, { name, price, companyId })
      .then(async response => {
        dispatch(fetchCompanies());
        navigate("Commerces");
        // dispatch({ type: ADD_COMPANY_SUCCESS, payload: response.data });
      })
      .catch(error => {
        // dispatch({ type: ADD_COMPANY_FAIL });
        console.log(error);
      });
  };
};
