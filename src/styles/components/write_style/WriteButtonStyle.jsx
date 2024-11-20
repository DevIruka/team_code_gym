import styled from 'styled-components'

export const StWriteButton = styled.button`
  position: fixed;
  right: 30px;
  bottom: 50px;
  background-color: var(--yellow);
  border-radius: 50%;
  border: none;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 300ms ease, background-color 300ms ease-in-out;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(255, 255, 255, 0.3);

  &:hover {
    transform: scale(1.1);
    background-color: #ffcc00;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.9),
      0 0 25px rgba(255, 255, 255, 0.8), 0 0 35px rgba(255, 255, 255, 0.7),
      0 0 50px rgba(255, 255, 255, 0.5);
  }
`
