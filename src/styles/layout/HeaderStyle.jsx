import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const StGnbContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header);
  padding: 20px 30px;

  box-shadow: 0 10px 400px rgba(255, 234, 0, 0.674),
    0 10px 300px rgba(255, 234, 0, 0.3), 0 0 200px rgba(255, 234, 0, 0.2); /* 빛 번짐 */
`

export const StGnbLeftWrapper = styled.div`
  display: flex;
  gap: 40px;
`

export const StLink = styled(Link)`
  text-decoration: none;
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
    text-shadow: 0 0 5px #fdfd96, 0 0 10px #fffb00, 0 0 15px #ffe600,
      0 0 20px #ffcc00, 0 0 35px #ffaa00, 0 0 40px #ffaa00;
    opacity: 0.8;
  }
`
