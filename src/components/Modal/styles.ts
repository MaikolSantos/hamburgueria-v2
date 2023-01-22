import styled from 'styled-components';

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: rgba(0,0,0,0.5);
  padding: 1rem;

  > div {
    background-color: var(--color-white);
    width: 100%;
    max-width: 31.25rem;
    border-radius: var(--radius-2);

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      background-color: var(--color-primary);
      border-top-left-radius: var(--radius-2);
      border-top-right-radius: var(--radius-2);

      h2 {
        color: var(--color-white);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        padding: 0;
        font-weight: 700;
      }
    }
    
    section {
      padding: 1rem;
    }
  }
`