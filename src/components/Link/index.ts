import styled from "styled-components";
import { Link as LinkStyle } from "react-router-dom";

export const Link = styled(LinkStyle)`
  background-color: transparent;
  border: none;
  outline-color: var(--color-primary);
  color: transparent;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 1.25rem;
  border-radius: var(--radius-2);
  transition: 0.2s ease-in-out;
  background-color: var(--color-grey-20);
  color: var(--color-grey-50);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75rem;

  :hover {
    background-color: var(--color-grey-50);
    color: var(--color-grey-0);
  }
`;
