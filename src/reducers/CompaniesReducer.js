import {
  FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAIL,
  LOGOUT_USER_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  SELECT_COMPANY
} from "../actions/types";

const INITIAL_STATE = {
  companies: [],
  loadingCompanies: false,
  selectedCompany: {},
  products: [],
  loadingProducts: false
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
    case FETCH_PRODUCTS:
      return {
        ...state,
        loadingProducts: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loadingProducts: false
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loadingProducts: false
      };
    case SELECT_COMPANY:
      return {
        ...state,
        selectedCompany: state.companies.find(c => c._id === action.payload)
      };
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
