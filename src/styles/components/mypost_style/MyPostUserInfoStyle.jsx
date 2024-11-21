import styled, { keyframes } from 'styled-components'

// 반짝반짝 네온 사인처럼 애니메이션 넣었습니다 :)

export const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 80px #ff00ff, 0 0 100px #ff00ff, 0 0 120px #ff00ff;
  }
  50% {
    text-shadow: 0 0 20px #fff, 0 0 40px #ff00ff, 0 0 80px #ff00ff, 0 0 120px #ff00ff, 0 0 160px #ff00ff, 0 0 200px #ff00ff, 0 0 240px #ff00ff;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 80px #ff00ff, 0 0 100px #ff00ff, 0 0 120px #ff00ff;
  }
`

export const MyPostUserInfoContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`

export const AnimatedText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  animation: ${glow} 2s infinite alternate;
  text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 40px #ff00ff,
    0 0 60px #ff00ff, 0 0 80px #ff00ff, 0 0 100px #ff00ff, 0 0 120px #ff00ff;
`
