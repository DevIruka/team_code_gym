import { styled } from 'styled-components'

export const StFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #181c14;
  margin: 40px auto 80px;
  border-radius: 10px;
  border: 2px solid var(--yellow);
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.5);
`

export const StCardHeader = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid var(--gray);

  h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-shadow: 0 0 5px #fdfd96, 0 0 10px #fffb00, 0 0 15px #ffe600,
      0 0 20px #ffcc00, 0 0 35px #ffaa00, 0 0 40px #ffaa00;
  }
`

export const StCardContent = styled.div`
  padding: 40px;
`

export const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const StFormTop = styled.div`
  display: flex;
  gap: 20px;
`

export const StFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`

export const StFormRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StFormBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const StButton = styled.button`
  width: 100%;
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
