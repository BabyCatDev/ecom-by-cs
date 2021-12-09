import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  LOGOUT_USER_SUCCESS,
  FETCH_REPORTS,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  orders: [],
  reports: [],
  loadingOrders: false,
  loadingReports: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        orders: [],
        loadingOrders: true
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loadingOrders: false
      };
    case FETCH_ORDERS_FAIL:
      return {
        ...state,
        loadingOrders: false
      };
    case FETCH_REPORTS:
      return {
        ...state,
        loadingReports: true
      };
    case FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        reports: action.payload,
        loadingReports: false
      };
    case FETCH_REPORTS_FAIL:
      return {
        ...state,
        loadingReports: false
      };
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
