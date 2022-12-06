import React from "react";
import Form from "../components/form";
import { FormWrapper, SignUpPageContainer, SignUpText, TextWrapper, Wrapper } from "./SignUpPage.styles";

const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <Wrapper>
        <TextWrapper>
          <SignUpText>
            <h1>Learn to code by watching others</h1>
            <p>See how experienced developers solve problems in real-time.<br />
              Watching scripted tutorials is great, but undestanding how developers think is invaluable
            </p>
          </SignUpText>
        </TextWrapper>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </Wrapper>
    </SignUpPageContainer >
  );
};

export default SignUpPage;
