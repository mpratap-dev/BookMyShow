import axios from "axios";
import axiosHttp from ".";

export type Response = {
  success: boolean;
  message: string;
  user?: string;
}

export type LoginBody = { 
  email?: string;
  password?: string;
 };

 
export const login = async (body: LoginBody) => {
  const response = await axiosHttp.post("users/login", body);
  return response.data;
};

export const register = async (params: { [key:string]: string }) => {
  const response = await axiosHttp.post("users", params);
  return response.data;
};

export const logout = async () => {
  const response = await axiosHttp.post("users/logout");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
  return response.data;
}
