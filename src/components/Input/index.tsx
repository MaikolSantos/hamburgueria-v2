import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Container, InputStyles } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  error: string | undefined;
}

export const Input = ({ placeholder, register, error, ...rest }: IInputProps) => {
  return (
    <Container>
      <InputStyles
        {...rest}
        {...register}
        placeholder={placeholder}
        error={error}
      />
      {error && <small>{error}</small>}
    </Container>
  );
};
