import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 26px;
  background-color: #fff;
  padding:40px 30px;
  border-radius:8px;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  text-align: center;

  p{
    color: ${({ theme }) => theme.colors.Neutral.GrayishBlue};
    font-size: 10px;
  }
  span{
    color: ${({ theme }) => theme.colors.Primary.Red};
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
  }

`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

`;


export const LogText = styled.p`
    margin-top: -20px;
    cursor: pointer;
    a{text-decoration: none;
    color:inherit}
`;
