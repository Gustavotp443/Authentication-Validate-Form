import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BgContainer } from "../layout/background.styles";
import SignUpPage from "../pages";
import ErrorPage from "../pages/error";
import Home from "../pages/home";
import Login from "../pages/login";
import ProtectedRoutes from "./ProtectedRoutes";

const Routering = () => {
  return (
    <BgContainer>
      <Router>
        <Routes>
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<SignUpPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </BgContainer>
  );
};

export default Routering;
