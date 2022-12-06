import styled from "styled-components";
import { Container } from "../../styles/global.styles";

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const LoginWrapper = styled.div`
  min-width: 500px;
  @media screen and (max-width:580px){
    min-width: 400px;
  }
  @media screen and (max-width:400px){
    min-width: 225px;
    margin: 0 4%;
  }
`;
