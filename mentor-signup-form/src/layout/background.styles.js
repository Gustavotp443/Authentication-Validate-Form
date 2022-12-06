import styled from "styled-components";

export const BgContainer = styled.div`
  background-image: url('/images/bg-intro-desktop.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-color:${({ theme }) => theme.colors.Primary.Red};
`;
