import styled from 'styled-components'

export const StSearchInputWrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;

  .search-icon {
    position: absolute;
    left: 15px;
    width: 23px;
    height: 23px;
    fill: var(--gray);
    pointer-events: none;
    z-index: 1;
  }
`

export const StSearchInputField = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 23px 0 53px;
  box-shadow: 0 0 0 1.5px #2b2c37, 0 0 25px -17px #000;
  border: 0;
  border-radius: 8px;
  background-color: #16171d;
  outline: none;
  color: var(--white);
  font-size: 20px;
  transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 0;

  &::placeholder {
    color: var(--gray);
  }

  &:hover {
    box-shadow: 0 0 0 2.5px #2f303d, 0px 0px 25px -15px #000;
  }

  &:focus {
    box-shadow: 0 0 0 2.5px #2f303d;
  }

  &:active {
    transform: scale(0.95);
  }
`

// TODO : box-shadow(border), background 색깔 회의
