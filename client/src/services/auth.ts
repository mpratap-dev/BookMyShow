import axios from "axios";
import axiosHttp from ".";
import { LOGIN_PAGE_URL } from "../routes/URL";

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
  try {
    const response = await axiosHttp.post("users/logout");
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = LOGIN_PAGE_URL; 
  }
}
