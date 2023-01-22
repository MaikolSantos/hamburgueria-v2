import logo from "../../assets/images/logo.png";
import iconDescription from "../../assets/images/icon-description.png";
import texture from "../../assets/images/texture.png";
import { Container, Description } from "./styles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ILoginFormProps } from "./types";

export const Login = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<ILoginFormProps>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<ILoginFormProps> = (data) => {
    userLogin(data);
  };

  return (
    <Container>
      <Description>
        <img src={logo} alt="Logo Burguer Kenzie" />
        <div>
          <img src={iconDescription} alt="Icone da Descrição" />
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>
        <img src={texture} alt="Textura" />
      </Description>

      <Form title="Login" onSubmit={handleSubmit(submit)}>
        <Input
          type="email"
          register={register("email")}
          placeholder="Email"
          error={errors.email && errors.email.message}
        />
        <Input
          type="password"
          register={register("password")}
          placeholder="Password"
          error={errors.password && errors.password.message}
        />
        <Button
          text="Entrar"
          variant="primary"
          type="submit"
          disabled={!isValid || !isDirty}
        />
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Link to="/register">Cadastrar</Link>
      </Form>
    </Container>
  );
};
