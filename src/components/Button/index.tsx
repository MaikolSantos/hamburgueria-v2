import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: string;
}

export const Button = ({ text, variant, ...rest }: IButtonProps) => {
  return (
    <Container {...rest} variant={variant}>
      {text}
    </Container>
  );
};
