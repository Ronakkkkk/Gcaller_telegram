import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://34.93.164.131:3001/api/v1",
});

export default axiosInstance;
