import { createContext, useEffect, useState } from "react";
import { ICartContext, ICartContextProps, IProductsCart } from "./types";

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartContextProps) => {
  const [cartProducts, setCartProducts] = useState([] as IProductsCart[]);
  const [total, setTotal] = useState(0);
  const [numberProducts, setNumberProducts] = useState(0);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("@productsCart") || "[]");

    if(products.length) {
      setCartProducts(products)
    }

  }, []);

  useEffect(() => {
    const total = cartProducts.reduce((previous, current) => {
      return previous + current.price * current.qtd;
    }, 0);

    setTotal(total);

    const numberProducts = cartProducts.reduce((previous, current) => {
      return previous + current.qtd;
    }, 0);

    setNumberProducts(numberProducts);
  }, [cartProducts]);

  function addToCart(id: number, currentProduct: IProductsCart) {
    const products = [...cartProducts];

    const productFound: IProductsCart | any = products.find(
      (product) => product.id === id
    );

    if (!productFound) {
      currentProduct.qtd = 1;

      products.push(currentProduct);
    } else {
      productFound.qtd = productFound.qtd + 1;
    }

    setCartProducts(products);
    localStorage.setItem("@productsCart", JSON.stringify(products));
  }

  function removeToCart(id: number) {
    const products = [...cartProducts];

    const productFound: IProductsCart | any = products.find(
      (product) => product.id === id
    );

    if (productFound.qtd > 1) {
      productFound.qtd -= 1;
      setCartProducts(products);
      localStorage.setItem("@productsCart", JSON.stringify(products));
    } else {
      const filterCartProducts = products.filter(
        (product) => product.id !== id
      );

      setCartProducts(filterCartProducts);
      localStorage.setItem("@productsCart", JSON.stringify(filterCartProducts));
    }
  }

  function removeProduct(id: number) {
    const products = [...cartProducts];

    const filterCartProducts = products.filter((product) => product.id !== id);

    setCartProducts(filterCartProducts);
    localStorage.setItem("@productsCart", JSON.stringify(filterCartProducts));
  }

  function removeAll() {
    setCartProducts([]);
    localStorage.removeItem("@productsCart");
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        total,
        numberProducts,
        addToCart,
        removeToCart,
        removeProduct,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
