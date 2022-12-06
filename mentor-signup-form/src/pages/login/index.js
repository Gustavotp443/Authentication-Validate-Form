import React from "react";
import LoginForm from "../../components/form/LoginForm";
import { LoginContainer, LoginWrapper } from "./login.styles";

const Login = () => {
  return (

    <LoginContainer>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
