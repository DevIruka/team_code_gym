import styled from 'styled-components'

export const StyledFloatingButton = styled.button`
  position: fixed;
  bottom: 50px;
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  width: 60px;
  height: 60px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#50a1f7'};
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.9),
      0 0 25px rgba(255, 255, 255, 0.8), 0 0 35px rgba(255, 255, 255, 0.7),
      0 0 50px rgba(255, 255, 255, 0.5);
  }

  & svg {
    font-size: 26px;
  }
`
