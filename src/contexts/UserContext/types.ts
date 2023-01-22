export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IUserContext {
  userRegister: (data: IUserRegisterData) => Promise<void>;
  userLogin: (dataForm: IUserLoginData) => Promise<void>;
  getProducts: () => Promise<void>;
  userLogout: () => void;

  products: IProducts[];
}

export interface IUserRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
