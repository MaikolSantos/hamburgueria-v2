import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Cards";
import { Cards } from "../../components/Cards/styles";
import { FormSearch } from "../../components/FormSearch";
import { InputSearch } from "../../components/FormSearch/styles";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { IProducts } from "../../contexts/UserContext/types";
import { Container } from "./styles";
import iconLogout from "../../assets/images/icon-logout.png";
import iconCart from "../../assets/images/icon-cart.png";
import iconSearch from "../../assets/images/icon-search.png";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { CartContext } from "../../contexts/CartContext";
import { Cart } from "../../components/Cart";

export const Home = () => {
  const { products, getProducts, userLogout } = useContext(UserContext);
  const { addToCart, numberProducts } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState([] as IProducts[]);
  const [valueInput, setValueInput] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");

    token ? getProducts() : navigate("/");
  }, []);

  function sendValueToSearch(value: string) {
    const searchProducts = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(value.toLocaleLowerCase()) ||
        product.category.toLowerCase().includes(value.toLocaleLowerCase())
      );
    });
    return searchProducts;
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    const searchProducts = sendValueToSearch(value);
    setFilteredProducts(searchProducts);

    setValueInput(value);
  }

  function handleOnSubmit(event: React.FormEvent) {
    event.preventDefault();

    const searchProducts = sendValueToSearch(valueInput);
    setFilteredProducts(searchProducts);

    setSearchVisible(false);
  }

  function seeSearch() {
    setSearchVisible(true);
  }

  return (
    <Container>
      <Header searchVisile={searchVisible}>
        <nav>
          <img src={iconSearch} alt="Icon Search" onClick={seeSearch} />
          <FormSearch onSubmit={handleOnSubmit}>
            <InputSearch
              type="text"
              value={valueInput}
              onChange={handleOnChange}
              placeholder="Buscar produto"
            />
            <Button text="Pesquisar" variant="primary" />
          </FormSearch>
          <figure>
            <img
              src={iconCart}
              alt="Button Cart"
              onClick={() => setIsModalVisible(true)}
            />
            <figcaption>{numberProducts}</figcaption>
          </figure>
          <img src={iconLogout} alt="Button Logout" onClick={userLogout} />
        </nav>
      </Header>
      <Cards>
        {filteredProducts.length
          ? filteredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                img={product.img}
                onClick={() => addToCart(product.id, product)}
              />
            ))
          : products.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                img={product.img}
                onClick={() => addToCart(product.id, product)}
              />
            ))}
      </Cards>

      {isModalVisible && (
        <Modal onClick={() => setIsModalVisible(false)}>
          <Cart />
        </Modal>
      )}
    </Container>
  );
};
