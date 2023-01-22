import { IProducts } from "../../contexts/UserContext/types";

export interface ICardProps extends IProducts{
  onClick:() => void;
}
