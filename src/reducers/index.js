import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DataReducer from "./DataReducer";
import UsersReducer from "./UsersReducer";
import CompaniesReducer from "./CompaniesReducer";
import OrderReducer from "./OrderReducer";

export default combineReducers({
  auth: AuthReducer,
  companiesData: CompaniesReducer,
  usersData: UsersReducer,
  usersData: UsersReducer,
  orderData: OrderReducer,
  data: DataReducer
});
