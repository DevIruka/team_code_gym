import { Menu } from '@mui/material'
import styled from 'styled-components'

export const StIconWrapper = styled.div`
  .user-icon {
    font-size: 50px;
    fill: var(--white);
    cursor: pointer;
    filter: drop-shadow(0 0 3px #fffb00) drop-shadow(0 0 5px #ffcc00)
      drop-shadow(0 0 8px #ffaa00);
    opacity: 0.8;
  }
`

export const UserProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  filter: drop-shadow(0 0 3px #fffb00) drop-shadow(0 0 5px #ffcc00)
    drop-shadow(0 0 8px #ffaa00);
`

export const StMenu = styled(Menu)`
  .MuiPaper-root {
    overflow: visible;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 42px;
      width: 10px;
      height: 10px;
      background-color: var(--white);
      transform: translateY(-50%) rotate(45deg);
    }
  }
`
