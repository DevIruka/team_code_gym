import styled from 'styled-components'

export const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  width: 100%;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`

export const StForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  height: auto;
  background-color: var(--khaki);
  border: 1px solid;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 10px;
  }
`

export const StInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 5px;
`

export const StInput = styled.input`
  height: 30px;
  width: 60vh;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const StCheckWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`

export const Stbtn = styled.button`
  width: 200px;
  font-family: 'Helchang';
  font-size: 20px;
  background-color: var(--yellow);
  border: 0px;
  border-radius: 4px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
  }
`
