import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import DataReducer from "./DataReducer";
import CompaniesReducer from "./CompaniesReducer";

export default combineReducers({
  auth: AuthReducer,
  companiesData: CompaniesReducer,
  data: DataReducer
});
