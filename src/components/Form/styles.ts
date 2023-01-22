import styled from "styled-components";

export const Container = styled.form`
  border: 0.125rem solid #f5f5f5;
  box-shadow: 0px 0px 1.875rem -1.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration-color: var(--color-grey-50);
      color: var(--color-grey-50);
      transition: 0.2s;

      :hover {
        text-decoration-color: var(--color-primary);
        color: var(--color-primary);
      }
    }
  }

  @media (min-width: 600px) {
    max-width: 23.9375rem;
  }

  button {
    width: 100%;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: #999999;
  }
`;
