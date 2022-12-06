import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  p{
    font-size:${({ theme }) => theme.typography.FontSize};
  }
`;

export const Container = styled.div`
    max-width: 1440px;
    min-height: 100vh;
`;
