import styled from 'styled-components'

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); // 카드 한줄에 2개를 고정하기 위해 그리드 사용함
  gap: 40px;
  width: 70%; //화면의 70% 정도만 컨테이너가 차지하게함.
  margin: 0 auto;
  padding: 50px 5%; // 위아래는 50px씩, 양쪽 여백을 화면 너비의 5%로 고정
  place-items: center;

  /* 내용이 적은 카드가 다른 카드와 높이를 맞춤 */
  grid-auto-rows: 1fr;
  align-items: stretch;

  /* 작은 화면에서는 카드 하나씩 한줄에 배치하고 양뽁 여백 조금 줄였습니다. */
  @media (max-width: 1600px) {
    grid-template-columns: 1fr;
    padding: 60px 8%;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 50px 2%;
  }
`

export default StyledCardContainer
