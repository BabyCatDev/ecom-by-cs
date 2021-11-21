import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DataReducer from "./DataReducer";
import UsersReducer from "./UsersReducer";
import CompaniesReducer from "./CompaniesReducer";

export default combineReducers({
  auth: AuthReducer,
  companiesData: CompaniesReducer,
  usersData: UsersReducer,
  data: DataReducer
});
