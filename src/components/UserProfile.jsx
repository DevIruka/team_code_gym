import React, { useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { StIconWrapper, StMenu } from '../styles/components/UserProfileStyle'
import { IconButton, MenuList } from '@mui/material'
import { UserMenu } from './UserMenu'

export const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <StIconWrapper>
      <IconButton onClick={handleClick}>
        <IoPersonCircleOutline className="user-icon" />
      </IconButton>

      <StMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          <UserMenu onClose={handleClose} />
        </MenuList>
      </StMenu>
    </StIconWrapper>
  )
}
