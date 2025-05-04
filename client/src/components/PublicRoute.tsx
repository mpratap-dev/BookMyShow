import React from "react"
import { HOME_PAGE_URL } from "../routes/URL";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  if(token) {
    window.location.href = HOME_PAGE_URL;
    return null;
  }
  
  return children;
}

export default PublicRoute;