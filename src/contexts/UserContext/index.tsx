import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IProducts,
  IUserContext,
  IUserContextProps,
  IUserLoginData,
  IUserRegisterData,
} from "./types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [products, setSetProducts] = useState([] as IProducts[]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");

    const id = localStorage.getItem("@iduser");

    if (token && id) {
      userAutoLogin(token, id);
    }
  }, []);

  async function userAutoLogin(token: string | null, id: string | null) {
    try {
      await api.get("/users/" + id, {
        headers: {
          Authorization: token,
        },
      });

      navigate("/home");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  }

  async function getProducts() {
    const token = localStorage.getItem("@token");

    try {
      const { data } = await api.get("/products", {
        headers: {
          Authorization: token,
        },
      });

      setSetProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  function userLogout() {
    localStorage.clear();
    navigate("/");
  }

  async function userRegister(dataForm: IUserRegisterData) {
    try {
      await api.post("/users", dataForm);

      toast.success("Usuário Cadastrado");

      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      toast.error("Esse já existe");
    }
  }

  async function userLogin(dataForm: IUserLoginData) {
    try {
      const {
        data: {
          accessToken,
          user: { id },
        },
      } = await api.post("/login", dataForm);

      localStorage.setItem("@token", "Bearer " + accessToken);
      localStorage.setItem("@iduser", id);

      api.defaults.headers.common["Authorization"] = "Bearer " + accessToken;

      toast.success("Login realizado com sucesso");

      setTimeout(() => navigate("/home"), 1000);
    } catch (error) {
      const currentError = error as AxiosError<string>;

      toast.error("Senha ou e-mail incorreto(s)");
    }
  }

  return (
    <UserContext.Provider
      value={{ userRegister, userLogin, getProducts, userLogout, products }}
    >
      {children}
    </UserContext.Provider>
  );
};
