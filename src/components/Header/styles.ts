import styled, { css } from "styled-components";

interface IHeaderProps {
  searchVisile: boolean;
}

export const Container = styled.header<IHeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 0.625rem 1rem;
  background-color: var(--color-grey-0);

  img {
    width: 9.375rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    figure {
      position: relative;

      figcaption {
        background-color: var(--color-primary);
        padding: .2rem;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--color-white);
        line-height: 1;
        border-radius: var(--radius-1);
        position: absolute;
        top: -0.625rem;
        right: -0.3125rem;
      }
    }

    img {
      opacity: .5;
      cursor: pointer;
      transition: .2s ease;
      width: fit-content;
    
      :hover {
        opacity: 1;
      }
    }

    img[alt='Icon Search'] {
      ${({searchVisile}) => searchVisile && css`
        ~ form {
          display: block;
          position: fixed;
          max-width: 100%;
          left: 0;
          top: 0;
          z-index: 2;
          padding: 1rem;
          background-color: var(--color-grey-20);
          animation: form ease .3s forwards;

          button {
            top: 1.5625rem;
            right: 1.75rem;

          }

          @keyframes form {
            from {
              transform: translateY(-100px);
              opacity: 0;
            } to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }

      `}

      @media (min-width: 623px) {
        display: none;
      }
    }
  }

  div {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;

    @media (min-width: 567px) {
      justify-content: space-between;
    }

    @media (min-width: 663px) {
      max-width: 78rem;
    }
  }
`;
