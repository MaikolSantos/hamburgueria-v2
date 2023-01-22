import { UserProvider } from "../UserContext";
import { CartProvider } from "../CartContext";
import { IProvidersProps } from "./types";

export const Provider = ({ children }: IProvidersProps) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
