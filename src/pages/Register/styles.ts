import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 58.6875rem;
  margin: 0 auto;

  @media (min-width: 600px) {
    justify-content: center;
  }

  @media (min-width: 808px) {
    margin: 0 auto;
  }

  @media (min-width: 854px) {
    gap: 3.875rem;
  }
`;

export const Description = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
  width: fit-content;

  @media (min-width: 808px) {
    display: flex;
  }

  div {
    border: 0.0625rem solid var(--color-grey-20);
    border-radius: var(--radius-1);
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: var(--color-grey-50);
    box-shadow: 0px 0.25rem 2.5rem -1.25rem rgba(0, 0, 0, 0.25);

    img {
      height: fit-content;
    }

    @media (min-width: 600px) {
      max-width: 23.5625rem;
    }
  }
`;
