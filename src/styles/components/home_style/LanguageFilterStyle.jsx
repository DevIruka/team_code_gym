import styled from 'styled-components'

export const StyledLanguageFilter = styled.div`
  height: 1.5em;
  padding: 20px 0px 10px 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
`

export const StyledLanguageTag = styled.button`
  font-family: 'Helchang';
  background-color: transparent;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  padding-top: 5px;
  text-align: center;

  // TODO : 색 나중에 통일!!
  // 포스트 카드 그림자와 동일한 값 적용
  border: 1px solid;
  border-radius: 8px;
  box-shadow: none;
  transition: 0.2s ease;
  // UX 부분
  cursor: pointer;
  &.active {
    background-color: white;
    color: black;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  &:hover {
    background-color: white;
    color: black;
  }
`
