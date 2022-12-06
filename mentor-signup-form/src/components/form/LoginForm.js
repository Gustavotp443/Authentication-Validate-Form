import React, { useState, memo } from "react";
import { FormContainer, FormWrapper, LogText } from "./form.styles";
import Button from "./formComponents/button";
import Input from "./formComponents/input";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

const LoginForm = () => {

  const Navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Looks like this is not an email",
      required: true
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password cannot be empty, should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("auth/login", values)
      .then((response) => {
        //ARMAZENANDO O TOKEN NA SessionStorage
        sessionStorage.setItem("token", response.data.access_token);
        alert("logado");
        Navigate("/");
      }).catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert("Erro inesperado ao efetuar login: Erro " + e + ". Entre em contato com o Suporte");
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formType = "Login";

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        {inputs.map(input => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            formType={formType}
          />

        ))}
        <Button text="Login" />
        <LogText>Don´t have an account ? <span><Link to="/signup">Sign up</Link></span></LogText>
      </FormContainer>
    </FormWrapper>
  );
};

export default memo(LoginForm);
