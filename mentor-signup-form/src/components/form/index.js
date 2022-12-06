import React, { useState, memo } from "react";
import { FormContainer, FormWrapper, LogText } from "./form.styles";
import Button from "./formComponents/button";
import FormHeader from "./formComponents/formheader";
import Input from "./formComponents/input";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


const Form = () => {
  let Navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });




  //REJECT PATTERN ---- GOOGLE JS REGEX CODE
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First Name cannot be empty, should be 3-16 characters and shouldn´t include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name cannot be empty, should be 3-16 characters and shouldn´t include any special character!",
      pattern: "^[A-Za-z0-9]{3,50}$",
      required: true
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Looks like this is not an email",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password cannot be empty, should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don´t match!",
      pattern: values.password,
      required: true
    }
  ];

  //Quando Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //  ENVIANDO OS DADOS PARA API
    api.post("auth/register", values)
      .then(() => {
        alert(`Usuário ${values.name} foi cadastrado com sucesso`);
        return Navigate("/login/");

      }).catch((erro) => {
        alert("Erro ao enviar o formulário: Erro " + erro);
      });
  };

  const onChange = (e) => {
    // para cada um dos nomes dentro do objeto ele vai atualizar o valor
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formType = "Register";



  return (
    <FormWrapper>
      <FormHeader />
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
        <Button text="CLAIM YOUR FREE TRIAL" />
        <p>By clicking the button you are agreeding to our <span>Terms ans Services</span></p>
        <LogText>Already have an account ? <span><Link to="/login">Log in</Link></span></LogText>
      </FormContainer>
    </FormWrapper>
  );
};

export default memo(Form);
