import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost:3001/api/v1",
});

export default axiosInstance;
