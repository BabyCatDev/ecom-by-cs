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
  FETCH_DELIVERIES_FAIL,
  LOGOUT_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  companies: [],
  loadingCompanies: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        loadingCompanies: true
      };
    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        companies: action.payload,
        loadingCompanies: false
      };
    case FETCH_COMPANIES_FAIL:
      return {
        ...state,
        loadingCompanies: false
      };
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
