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
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IRegisterFormProps } from "./types";

export const Register = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegisterFormProps>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<IRegisterFormProps> = (data) => {
    userRegister(data);
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

      <Form
        title="Cadastro"
        link="/"
        linkText="Retornar para o login"
        onSubmit={handleSubmit(submit)}
      >
        <Input
          type="text"
          register={register("name")}
          placeholder="Nome Completo"
          error={errors.name && errors.name.message}
        />
        <Input
          type="email"
          register={register("email")}
          placeholder="Email"
          error={errors.email && errors.email.message}
        />
        <Input
          type="password"
          register={register("password")}
          placeholder="Senha"
          error={errors.password && errors.password.message}
        />
        <Input
          type="password"
          register={register("confirmPassword")}
          placeholder="Confirmar senha"
          error={errors.confirmPassword && errors.confirmPassword.message}
        />
        <Button
          text="Cadastrar"
          variant="grey"
          type="submit"
          disabled={!isValid || !isDirty}
        />
      </Form>
    </Container>
  );
};
