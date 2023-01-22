import React from "react";
import { Button } from "../Button";
import { Container } from "./styles";
import { IModalProps } from "./types";

export const Modal = ({ children, onClick }: IModalProps) => {
  return (
    <Container>
      <div>
        <header>
          <h2>Carrinho de compras</h2>
          <Button text="x" variant="primary" onClick={onClick} />
        </header>
        <section>{children}</section>
      </div>
    </Container>
  );
};
