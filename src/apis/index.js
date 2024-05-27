import axios from "axios";

export const trafficInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + "/traffics",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

trafficInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

trafficInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const pathInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + "/paths",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

pathInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

pathInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
