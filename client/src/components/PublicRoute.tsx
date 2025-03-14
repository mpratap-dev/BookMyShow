import React from "react"

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  if(token) {
    window.location.href = "/";
    return null;
  }
  
  return children;
}

export default PublicRoute;