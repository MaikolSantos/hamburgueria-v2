import React from "react";
import { IProducts } from "../UserContext/types";

export interface ICartContextProps {
  children: React.ReactNode;
}

export interface ICartContext {
  cartProducts: IProductsCart[];
  total: number;
  numberProducts: number;
  addToCart(id: number, currentProduct: IProductsCart): void;
  removeToCart: (id: number) => void;
  removeProduct(id: number): void;
  removeAll(): void
}

export interface IProductsCart extends IProducts {
  qtd?: number | any;
}
