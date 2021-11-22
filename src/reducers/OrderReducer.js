import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  LOGOUT_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  orders: [],
  loadingOrders: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
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
    case LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
