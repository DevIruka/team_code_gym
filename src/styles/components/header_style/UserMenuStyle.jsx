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
