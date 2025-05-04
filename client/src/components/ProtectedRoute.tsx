import React from "react"
import { LOGIN_PAGE_URL } from "../routes/URL";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  if(!token) {
    window.location.href = LOGIN_PAGE_URL;
    return null;
  }
  
  return children;
}

export default ProtectedRoute;