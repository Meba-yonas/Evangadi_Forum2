import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "http://localhost:5500/api",
});

export default axiosBaseURL;
export const axiosImageURL = "http://localhost:5500/api";