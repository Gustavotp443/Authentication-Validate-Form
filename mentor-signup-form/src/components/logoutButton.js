import React from "react";
import { LogoutButtonBox } from "./logoutButton.styles";

const LogoutButton = ({ onClick }) => {
  return (
    <LogoutButtonBox onClick={onClick}>
      Logout
    </LogoutButtonBox>
  );
};

export default LogoutButton;
