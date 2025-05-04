import axios, { AxiosRequestHeaders } from "axios";
import { logout } from "./auth";
import { LOGIN_PAGE_URL } from "../routes/URL";

const axiosHttp = axios.create({
  baseURL: `/api/`,
});

axiosHttp.interceptors.request.use(
  (config) => {
    const token =  localStorage.getItem("token");
    return {
      ...config,
      headers: {
        ...(token !== null && { Authorization: `Bearer ${token}` }),
        ...config.headers,
      } as AxiosRequestHeaders,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosHttp.interceptors.response.use(
  (response) => {
    //const url = response.config.url;

    //setLocalStorageToken(token);
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // (`unauthorized :)`);
      // localStorage.removeItem("persist:root");
      // removeLocalStorageToken
      logout();
    }
    return Promise.reject(error);
  }
);

export default axiosHttp;