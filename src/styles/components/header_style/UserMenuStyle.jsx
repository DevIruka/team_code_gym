import { MenuItem } from '@mui/material'
import styled from 'styled-components'

export const StMenuItem = styled(MenuItem)`
  .menu-icon {
    margin-right: 8px;
  }

  &:first-child {
    pointer-events: none;
    cursor: default;
  }
`

export const UserProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  margin-right: 8px;
`
