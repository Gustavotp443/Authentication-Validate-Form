import React, { useState, useCallback } from "react";
import { Icon, InputBox, InputWrapper } from "./input.styles";

// const [validate, setValidate] = useState("success");



const Input = ({ onChange, errorMessage, formType, ...InputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);
  return (
    <InputWrapper >
      <InputBox {...InputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() => formType === "Register" ? InputProps.name === "confirmPassword" && setFocused(true) :
          InputProps.name === "password" && setFocused(true)
        }
      />
      <Icon><img width="20px" height="20px" src="/images/icon-error.svg" alt="" /></Icon>
      <span>{errorMessage}</span>
    </InputWrapper>
  );
};

export default Input;
