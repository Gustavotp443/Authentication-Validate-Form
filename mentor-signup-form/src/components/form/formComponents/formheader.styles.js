import styled from "styled-components";

export const FormHeaderBox = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${({ theme }) => theme.colors.Accent.Blue};
    padding: 16px 13px;
    text-align: center;
    border-radius: 8px;
    font-size: 14px;
    color:${({ theme }) => theme.colors.Neutral.GrayishBlue};
    span{color: #fff;};
`;
