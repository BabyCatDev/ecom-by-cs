import axios from "axios";
import { getApiUrl } from "../Constants";
const url = getApiUrl();
const apiInstance = axios.create({
  baseURL: "http://192.168.127.95:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
