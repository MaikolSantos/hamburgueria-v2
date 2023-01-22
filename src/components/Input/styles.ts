import styled from "styled-components";

interface errorP {
  error: string | undefined;
}

export const Container = styled.fieldset`
  border: none;
  position: relative;

  small {
    color: var(--color-negative);
  }
`;

export const InputStyles = styled.input<errorP>`
  width: 100%;
  border: 0.125rem solid var(--color-grey-100);
  border-radius: var(--radius-2);
  padding: 1rem 0.75rem;
  font-size: 1rem;
  border-color: ${({ error }) => error && "var(--color-negative)"};

  :focus {
    outline: transparent;
    border-color: var(--color-primary);
  }
`;
