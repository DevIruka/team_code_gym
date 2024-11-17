import { styled } from 'styled-components'

export const StGnbContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header);
  padding: 20px 30px;
`

export const StGnbLeftWrapper = styled.div`
  display: flex;
  gap: 40px;
`

export const StLogo = styled.h1`
  position: relative;
  font-family: 'Russo One', sans-serif;
  font-size: 50px;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 4px;
  transform: skew(-15deg);

  &::before {
    content: 'CODEGYM';
    position: absolute;
    top: 0;
    left: 0;
    color: var(--yellow-light);
    z-index: -1;
    // TODO : 네온 크기 정하기
    text-shadow: 0 0 6px #fdfd96, 0 0 8px #fffb00, 0 0 10px #ffe600,
      0 0 12px #ffcc00, 0 0 18px #ffaa00, 0 0 24px #ffaa00;
    /* text-shadow: 0 0 5px #fdfd96, 0 0 10px #fffb00, 0 0 15px #ffe600,
      0 0 20px #ffcc00, 0 0 35px #ffaa00, 0 0 40px #ffaa00; */
    opacity: 0.8;
  }
`

// TODO : 사진 화질이 안좋아서 직접 로고 만들었음. 의견물어보기
