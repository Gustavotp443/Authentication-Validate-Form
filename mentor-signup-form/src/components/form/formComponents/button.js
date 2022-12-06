import React from "react";
import { ButtonBox } from "./button.styles";


const Button = ({ text }) => {
  return (
    <ButtonBox type="submit">{text}</ButtonBox>
  );
};

export default Button;
