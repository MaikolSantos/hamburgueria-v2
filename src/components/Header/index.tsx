import Logo from "../../assets/images/logo.png";
import { Container } from "./styles";
import { IHeaderProps } from "./types";

export const Header = ({ children, searchVisile }: IHeaderProps) => {
  return (
    <Container searchVisile={searchVisile}>
      <div>
        <img src={Logo} alt="Logo Burguer Kenzie" />
        {children}
      </div>
    </Container>
  );
};
