import axios from "axios";

// Set up axios instance with a base URL, using environment variable or default
const axiosBaseURL = axios.create({
  baseURL: "https://evangadi-forum2-6.onrender.com"
});

// Adding a request interceptor
axiosBaseURL.interceptors.request.use(config => {
  // Modify config before sending the request
  const token = localStorage.getItem('token'); // Example of retrieving a token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Adding a response interceptor
axiosBaseURL.interceptors.response.use(response => {
  return response;
}, error => {
  // Handle error responses here
  return Promise.reject(error);
});


export default axiosBaseURL;
