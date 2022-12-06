import React, { useEffect } from "react";
import LogoutButton from "../../components/logoutButton";
import { HomeSection } from "./index.styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";



const Home = () => {

  const Navigate = useNavigate();

  useEffect(() => {
    api.get("gerentes");
  }, []);


  const handleLogout = () => {
    sessionStorage.removeItem("token");
    Navigate("/login/");
  };

  return (
    <HomeSection>
      <div>
        <h1>Bem vindo novamente!!</h1>
        <LogoutButton onClick={handleLogout} />
      </div>
    </HomeSection>
  );
};

export default Home;
