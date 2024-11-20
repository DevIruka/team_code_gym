import styled from 'styled-components'

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  background-color: transparent;
  border: 2px solid var(--white);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;

  &:hover {
    background-color: var(--khaki);
    transform: translateY(-2px);
  }

  & svg {
    font-size: 18px;
  }
`
