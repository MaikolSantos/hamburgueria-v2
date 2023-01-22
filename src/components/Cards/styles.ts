import styled from "styled-components";

export const Cards = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  overflow: auto;

  @media (min-width: 567px) {
    width: 100%;
    justify-content: flex-start;
    max-width: 78rem;
    margin: 0 auto;
  }

  @media (min-width: 663px) {
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 18.75rem;
  height: 21.625rem;
  border: 0.125rem solid var(--color-grey-20);
  border-radius: var(--radius-1);
  transition: 0.2s ease-in-out;

  img {
    transition: 0.2s ease-in-out;
    transform: scale(0.8);
  }

  :hover {
    border-color: var(--color-primary);

    img {
      transform: scale(1) rotate(10deg);
    }
  }

  figure {
    background-color: var(--color-grey-0);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: var(--radius-1);
    border-top-right-radius: var(--radius-1);
    height: 9.375rem;
    overflow: hidden;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: fit-content;
    padding: 1.25rem;

    h3 {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--color-grey-100);
    }

    span {
      font-size: 0.75rem;
      color: var(--color-grey-50);
    }

    strong {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    button {
    max-height: 2.5rem;
  }
  }

`;
