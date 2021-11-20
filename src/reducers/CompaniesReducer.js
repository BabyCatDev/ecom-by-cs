import {
  FETCH_COMPANIES,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAIL,
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
