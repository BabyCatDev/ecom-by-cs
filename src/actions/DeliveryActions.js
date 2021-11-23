import {
  DELIVERY_STATS,
  DELIVERY_STATS_SUCCESS,
  DELIVERY_STATS_FAIL
} from "./types";
import apiInstance from "./Base";

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
