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
  background-color: #181c14;
  border-radius: 10px;
  border: 2px solid var(--yellow);
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.5);
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 10px;
  }
`

export const StTitle = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ffd700, 0 0 20px #ffd700,
    0 0 35px #ffd700, 0 0 40px #ffd700;
`

export const StLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffd700;
  margin-bottom: 0.25rem;
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
  background-color: #2c2d27;
  border: 1px solid #3c3d37;
  color: white;
  padding: 0.5rem;
  outline: none;
  &:focus {
    border-color: #ffd700;
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.5);
  }
  margin: 4px;

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
  background-color: var(--yellow);
  color: #181c14;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #c29e1c;
  }
`
