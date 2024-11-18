// TODO: 카드 스타일을 더 개선해야할 것 같습니다. 일단은 기초적인 UI만 넣었습니다.
import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: var(--gray);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 600px;
  height: 400px;
  transition: transform 0.2s;
  font-size: 14px;

  &:hover {
    transform: translateY(-5px);
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`

export const CardContext = styled.p`
  font-size: 1em;
  margin-bottom: 15px;
  line-height: 1.4;
`

export const CardCode = styled.div`
  margin-top: 10px;
`
