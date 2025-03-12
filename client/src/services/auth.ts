import axios from "axios";

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
  const response = await axios.post("/api/users/login", body);
  return response.data;
};