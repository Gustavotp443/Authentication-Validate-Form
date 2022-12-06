import styled from "styled-components";

export const SignUpPageContainer = styled.div`
  height: 100vh;
  @media screen and (max-width:620px){
    height: 130vh;
    padding-bottom: 40px;
  }

`;
export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SignUpText = styled.div`
  color: #fff;
  p{
  @media screen and (max-width:620px){
    font-size: 0.8em;

  }}
  h1{
    margin-bottom: 20px;
    line-height: 50px;
    font-size: 3em;
    @media screen and (max-width:620px){
    font-size: 1.5em;
    line-height: 35px;

  }}


`;

export const FormWrapper = styled.div`
  width: 50%;
  @media screen and (max-width:620px){
    width: 100%;
    position: relative;
    top: -100px;
  }
`;

export const TextWrapper = styled.div`
  width: 45%;
  @media screen and (max-width:620px){
    width: 100%;
    text-align: center;
  }
`;
