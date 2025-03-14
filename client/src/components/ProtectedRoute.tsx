import React from "react"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  if(!token) {
    window.location.href = "/login";
    return null;
  }
  
  return children;
}

export default ProtectedRoute;