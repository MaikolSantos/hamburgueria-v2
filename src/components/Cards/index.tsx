import { Button } from "../Button";
import { Item } from "./styles";
import { ICardProps } from "./types";

export const Card = ({
  id,
  name,
  category,
  price,
  img,
  onClick,
}: ICardProps) => {
  return (
    <Item id={id + ""}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
        <strong>R$ {price.toFixed(2)}</strong>
        <Button text="Adicionar" variant="primary" onClick={onClick} />
      </div>
    </Item>
  );
};
