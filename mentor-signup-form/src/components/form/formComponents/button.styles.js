import styled from "styled-components";

export const ButtonBox = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.Primary.Green};
  border: 1px solid ${({ theme }) => theme.colors.Neutral.GrayishBlue};
  cursor: pointer;
  border-radius: 8px;
  width: 100%;
  padding: 13px;
  @media screen and (max-width:425px){
    width: 110%;
  }
`;
