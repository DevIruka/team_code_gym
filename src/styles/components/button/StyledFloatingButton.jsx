import styled from 'styled-components'

export const StyledFloatingButton = styled.button`
  position: fixed;
  left: 30px;
  bottom: 50px;
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  width: 50px;
  height: 50px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--orange)'};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  padding: 0 12px;
  transition: background-color 300ms ease, transform 300ms ease,
    box-shadow 300ms ease;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || '#ff9513'};
    animation: bounce 1.5s infinite;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  & svg {
    font-size: 30px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
