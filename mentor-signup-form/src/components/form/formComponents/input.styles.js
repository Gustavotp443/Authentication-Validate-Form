import styled from "styled-components";

export const InputWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
position: relative;

span{
  display: none;
  text-align:justify;
  margin-top: 10px;
  margin-bottom: -10px;
}


`;

export const InputBox = styled.input`

  padding:12px 20px 12px 20px;
  width: 100%;
  color: ${({ theme }) => theme.colors.Neutral.DarkBlue};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.Neutral.GrayishBlue};

  &:invalid~span, &:invalid~i{
  display: ${({ focused }) => focused === "true" ? "block" : "none"}

}
  &:focus{
    border: 1px solid ${({ theme }) => theme.colors.Primary.Red};
  }
  @media screen and (max-width:425px){
    width: 110%;
  }
`;

export const Icon = styled.i`
  display:none;
  position: absolute;
  right:0;
  margin-top: 12px;
  margin-right: 20px;
`;
