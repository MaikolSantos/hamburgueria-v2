import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Buttons, Container, TotalContainer } from "./styles";

import iconTrash from "../../assets/images/icon-trash.png";
import { Button } from "../Button";

export const Cart = () => {
  const {
    cartProducts,
    total,
    addToCart,
    removeToCart,
    removeProduct,
    removeAll,
  } = useContext(CartContext);

  return (
    <Container>
      <ul>
        {cartProducts.length ? (
          cartProducts.map((product) => {
            return (
              <li key={product.id}>
                <figure>
                  <img src={product.img} alt="" />
                </figure>
                <div>
                  <header>
                    <h3>{product.name}</h3>
                    <img
                      src={iconTrash}
                      alt="Icon Trash"
                      onClick={() => removeProduct(product.id)}
                    />
                  </header>
                  <Buttons>
                    <button onClick={() => removeToCart(product.id)}>-</button>
                    <span>{product.qtd}</span>
                    <button onClick={() => addToCart(product.id, product)}>
                      +
                    </button>
                  </Buttons>
                </div>
              </li>
            );
          })
        ) : (
          <h3>Carrinho vazio</h3>
        )}
      </ul>

      {total ? (
        <div>
          <TotalContainer>
            <p>Total</p>
            <strong>
              {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </strong>
          </TotalContainer>
          <Button text="Remover todos" variant="grey" onClick={removeAll} />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};
