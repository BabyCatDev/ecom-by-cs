import {
  DELIVERY_STATS,
  DELIVERY_STATS_SUCCESS,
  DELIVERY_STATS_FAIL,
  FETCH_ORDERS,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAIL,
  ADMIN_DELIVERY_STATS_SUCCESS
} from "./types";
import apiInstance from "./Base";
import { navigate } from "../navigations/RootNavigation";
import { addDaytoDate } from "../helpers";

export const fetchAdminStats = ({ fromDate, toDate }) => {
  return dispatch => {
    dispatch({ type: DELIVERY_STATS });
    apiInstance
      .get(`/adminstats?fromDate=${fromDate}&toDate=${addDaytoDate(toDate)}`)
      .then(response => {
        dispatch({ type: DELIVERY_STATS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: DELIVERY_STATS_FAIL });
        console.log(error);
      });
  };
};
export const fetchDeliveryStats = () => {
  return dispatch => {
    dispatch({ type: DELIVERY_STATS });
    apiInstance
      .get(`/deliverystats`)
      .then(response => {
        dispatch({ type: DELIVERY_STATS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: DELIVERY_STATS_FAIL });
        console.log(error);
      });
  };
};

export const fetchSellerStats = ({ fromDate, toDate }) => {
  return dispatch => {
    dispatch({ type: DELIVERY_STATS });
    apiInstance
      .get(`/sellerstats?fromDate=${fromDate}&toDate=${addDaytoDate(toDate)}`)
      .then(response => {
        dispatch({ type: DELIVERY_STATS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: DELIVERY_STATS_FAIL });
        console.log(error);
      });
  };
};

export const getDeliveryOrders = () => {
  return dispatch => {
    dispatch({ type: FETCH_ORDERS });
    apiInstance
      .get("/deliveryorders")
      .then(response => {
        dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: FETCH_ORDERS_FAIL });
      });
  };
};

export const getAdminDeliveryOrders = ({ deliveryId, fromDate, toDate }) => {
  return dispatch => {
    apiInstance
      .get(
        `/admindeliveryorders/${deliveryId}?fromDate=${fromDate}&toDate=${addDaytoDate(
          toDate
        )}`
      )
      .then(response => {
        dispatch({
          type: ADMIN_DELIVERY_STATS_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const respondToOrder = ({
  orderId,
  deliveryFeedback,
  status,
  seller
}) => {
  return dispatch => {
    apiInstance
      .patch(`/delivery/` + orderId, {
        status,
        deliveryFeedback,
        seller
      })
      .then(response => {
        dispatch(getDeliveryOrders());
        navigate("DeliveryOrders");
      })
      .catch(error => {
        console.log(error);
      });
  };
};
