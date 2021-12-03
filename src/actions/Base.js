import axios from "axios";
import { getApiUrl } from "../Constants";
const apiInstance = axios.create({
  baseURL: getApiUrl(),
  headers: {
    "Content-Type": "application/json"
  }
});

export default apiInstance;
