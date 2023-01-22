import styled from "styled-components";

export const Container = styled.section`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 13.125rem;
    overflow-y: auto;
    padding-right: 1rem;

    li {
      display: flex;
      gap: 1rem;
      width: 100%;

      figure {
        background-color: var(--color-grey-20);
        border-radius: var(--radius-2);
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;

        img {
          width: 100%;
        }
      }

      div {
        flex-grow: 1;
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;

          img {
            cursor: pointer;
            opacity: 0.8;

            :hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 2.125rem;
    font-size: 1.25rem;
    border: none;
    background-color: var(--color-grey-20);
    transition: 0.2s ease;
    cursor: pointer;

    :hover {
      background-color: var(--color-grey-50);
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.875rem;
    height: 2.125rem;
    border: 2px solid var(--color-grey-20);
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 0.0625rem solid var(--color-grey-20);

  p {
    font-weight: bold;
    color: var(--color-grey-100);
  }

  strong {
    color: var(--color-grey-50);
  }

  + button {
    width: 100%;
    margin-top: 1rem;
  }
`;
