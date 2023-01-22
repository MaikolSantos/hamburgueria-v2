import React from "react";

import logo from "../../assets/images/logo.png";
import { Container } from "./styles";

export const NotFound = () => {
  return (
    <Container>
      <img src={logo} alt="Kenzie Burguer" />
      <h1>404 - Page Not Found</h1>
    </Container>
  );
};
