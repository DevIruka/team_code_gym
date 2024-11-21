// TODO: 카드 스타일을 더 개선해야할 것 같습니다. 일단은 기초적인 UI만 넣었습니다.
import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: #222;
  border-radius: 8px;
  padding: 20px;
  aspect-ratio: 3 / 2;
  transition: transform 0.2s;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* 노란색 네온 효과 */
  border: 2px solid #ffea00;
  box-shadow: 0 0 10px rgba(255, 234, 0, 0.8), 0 0 20px rgba(255, 234, 0, 0.6);

  /* 카드 크기 제한 */
  min-width: 500px; /* 최소 너비 */
  max-width: 600px; /* 최대 너비 */
  height: auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(255, 234, 0, 1),
      /* 더 강렬한 네온 */ 0 0 30px rgba(255, 234, 0, 0.8); /* 확산 증가 */
  }
`

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`

export const CardContextArea = styled.div`
  height: 30%;
`

export const CardContextWrapper = styled.div`
  // ... 구현
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
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
  overflow: hidden;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const CardNickname = styled.div`
  font-size: 20px;
`
export const CardProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
`
