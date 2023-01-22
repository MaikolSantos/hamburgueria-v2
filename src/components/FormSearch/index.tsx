import { Container } from "./styles";
import { IFormSearchProps } from "./types";

export const FormSearch = ({ onSubmit, children }: IFormSearchProps) => {
  return <Container onSubmit={onSubmit}>{children}</Container>;
};
