import styled, { css } from "styled-components";

interface IButtonStylesProps {
  height?: string;
  variant: string;
}

export const Container = styled.button<IButtonStylesProps>`
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
  height: ${({ height }) => (height === "medium" ? `2.5rem` : `3.75rem`)};

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background-color: var(--color-primary);
      color: var(--color-white);

      :disabled {
        cursor: not-allowed;
        background-color: var(--color-primary-50);
      }

      :hover {
        background-color: var(--color-primary-50);
      }
    `}

  ${({ variant }) =>
    variant === "grey" &&
    css`
      background-color: var(--color-grey-20);
      color: var(--color-grey-50);

      :hover {
        background-color: var(--color-grey-50);
        color: var(--color-grey-0);
      }
    `}
`;
