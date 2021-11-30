import {
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  FETCH_REPORTS,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAIL
} from "./types";
import apiInstance from "./Base";
import { navigate, goBack } from "../navigations/RootNavigation";

//getUsers
export const getSellerOrders = ({ fromDate, toDate }) => {
  return dispatch => {
    dispatch({ type: FETCH_ORDERS });
    apiInstance
      .get(`/sellerorders?fromDate=${fromDate}&toDate=${toDate}`)
      .then(response => {
        dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: FETCH_ORDERS_FAIL });
      });
  };
};

export const updateOrder = ({
  orderId,
  clientAddress,
  deliveryDate,
  clientPhones,
  clientName,
  comments,
  delivery,
  oldDelivery,
  productsDetails,
  oldProductsIds
}) => {
  return dispatch => {
    apiInstance
      .patch(`/order/${orderId}`, {
        clientAddress,
        deliveryDate,
        clientPhones,
        clientName,
        comments,
        delivery,
        oldDelivery,
        productsDetails,
        oldProductsIds
      })
      .then(response => {
        dispatch(getSellerReports());
        dispatch(getSellerOrders({ fromDate: "", toDate: "" }));
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const validateOrder = ({ orderId, status, deliveryDate }) => {
  return dispatch => {
    apiInstance
      .patch(`/postpone/${orderId}`, {
        status,
        deliveryDate,
        deliveryFeedback: ""
      })
      .then(response => {
        dispatch(getSellerReports());
        dispatch(getSellerOrders({ fromDate: "", toDate: "" }));
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getSellerReports = () => {
  return dispatch => {
    dispatch({ type: FETCH_REPORTS });
    apiInstance
      .get(`/sellerreports`)
      .then(response => {
        dispatch({ type: FETCH_REPORTS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: FETCH_REPORTS_FAIL });
      });
  };
};

//getUsers
export const createOrder = ({
  deliveryDate,
  clientAddress,
  clientPhones,
  clientName,
  delivery,
  productsDetails,
  comments
}) => {
  return dispatch => {
    apiInstance
      .post("/order", {
        deliveryDate,
        clientAddress,
        clientPhones,
        clientName,
        delivery,
        productsDetails,
        comments
      })
      .then(response => {
        dispatch(getSellerOrders({ fromDate: "", toDate: "" }));
        goBack();
      })
      .catch(error => {
        console.log(error);
      });
  };
};
