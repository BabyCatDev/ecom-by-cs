import { FETCH_ORDERS, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL } from "./types";
import apiInstance from "./Base";
import { navigate } from "../navigations/RootNavigation";

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

//getUsers
export const createOrder = ({
  deliveryDate,
  clientAddress,
  clientPhone,
  clientName,
  delivery,
  productsDetails
}) => {
  return dispatch => {
    apiInstance
      .post("/order", {
        deliveryDate,
        clientAddress,
        clientPhone,
        clientName,
        delivery,
        productsDetails
      })
      .then(response => {
        dispatch(getSellerOrders());
        navigate("SellerOrders");
      })
      .catch(error => {
        console.log(error);
      });
  };
};
