import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import UsersReducer from "./UsersReducer";
import CompaniesReducer from "./CompaniesReducer";
import OrderReducer from "./OrderReducer";
import DeliveryReducer from "./DeliveryReducer";

export default combineReducers({
  auth: AuthReducer,
  companiesData: CompaniesReducer,
  usersData: UsersReducer,
  usersData: UsersReducer,
  orderData: OrderReducer,
  deliveryData: DeliveryReducer
});
