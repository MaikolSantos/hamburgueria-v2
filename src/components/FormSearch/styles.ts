import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  position: relative;
  display: none;

  @media (min-width: 623px) {
    display: block;
  }

  @media (min-width: 567px) {
    max-width: 22.8125rem;
  }

  button {
    position: absolute;
    right: 0.9375rem;
    top: 0.625rem;
  }
`;

export const InputSearch = styled.input`
  padding: 0.625rem 0.9375rem;
  width: 100%;
  min-width: 20rem;
  min-height: 3.75rem;
  border: 0.125rem solid transparent;
  outline: none;
  border-radius: var(--radius-2);

  :focus {
    border-color: var(--color-primary);
  }

  + button {
    max-height: 2.5rem;
    line-height: 1;
  }
`;
