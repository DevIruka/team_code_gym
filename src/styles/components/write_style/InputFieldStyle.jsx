import styled from 'styled-components'

export const StLabel = styled.label`
  display: block;
  font-size: 22px;
  font-weight: 700;
  color: var(--yellow);
  margin-bottom: 8px;
`

export const StInput = styled.input`
  width: 100%;
  background-color: #2c2d27;
  border: 1px solid #3c3d37;
  color: var(--white);
  padding: 10px 15px;
  font-size: 20px;
  font-family: 'Helchang', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--yellow);
  }
`

export const StTextarea = styled.textarea`
  width: 100%;
  background-color: #2c2d27;
  border: 1px solid #3c3d37;
  color: var(--white);
  padding: 10px 15px;
  font-size: 20px;
  font-family: 'Helchang', sans-serif;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--yellow);
  }
`
