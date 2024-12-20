import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.apiUrl,
});

export default axiosInstance;
