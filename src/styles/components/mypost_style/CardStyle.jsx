// TODO: 카드 스타일을 더 개선해야할 것 같습니다. 일단은 기초적인 UI만 넣었습니다.
import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: var(--gray);
  border-radius: 8px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 20px;
  aspect-ratio: 3 / 2;
  transition: transform 0.2s;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`

export const CardContext = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.5;
  flex-grow: 1; //title, content, 코드 있는 부분 항상 같은 위치에 고정하기 위함
`

export const CardCode = styled.div`
  border-radius: 8px;
  margin-top: 10px;
  /* TODO: 넘치는 부분 ... 처리 */
  overflow: hidden;
`
