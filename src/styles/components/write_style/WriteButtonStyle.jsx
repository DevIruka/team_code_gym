import styled from 'styled-components'

export const StWriteButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
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

  &:hover {
    transform: scale(1.1);
    background-color: #ffcc00;
  }
`
