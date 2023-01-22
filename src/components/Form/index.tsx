import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface IFormProps {
  title: string;
  link?: string;
  linkText?: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

export const Form = ({
  title,
  link,
  linkText,
  onSubmit,
  children,
}: IFormProps) => {
  return (
    <Container onSubmit={onSubmit} noValidate={true} autoComplete="off">
      <div>
        <h2>{title}</h2>
        {!link ? "" : <Link to={link}>{linkText}</Link>}
      </div>
      {children}
    </Container>
  );
};
