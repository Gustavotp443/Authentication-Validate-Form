import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";


const useAuth = () => {
  const token = sessionStorage.getItem("token");
  const [isLogged,] = useState(token != null);
  const user = isLogged;

  return user;
};



const ProtectedRoutes = () => {

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/signup/" />;

};

export default ProtectedRoutes;
