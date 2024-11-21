import React, { useState } from 'react'
import {
  StIconWrapper,
  StMenu,
  UserProfileImg,
} from '../../styles/components/header_style/UserProfileStyle'
import { IconButton, MenuList } from '@mui/material'
import { UserMenu } from './UserMenu'
import { useSelector } from 'react-redux'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { useProfileImage } from '../../hooks/useProfileImage'

export const UserProfile = () => {
  const userId = useSelector((state) => state.userData)

  // const profileImage = useSelector(
  //   (state) =>
  //     state.userImage.profileImages[userId] || '/images/default-profile.png'
  // )

  const profileImage = useProfileImage(userId);


  console.log('여기에요 여기', profileImage)
  
  
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
        {profileImage.includes('default') ? (
          <IoPersonCircleOutline className="user-icon" />
        ) : (
          <UserProfileImg src={profileImage} />
        )}
      </IconButton>

      <StMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          <UserMenu
            userId={userId}
            profileImage={profileImage}
            onClose={handleClose}
          />
        </MenuList>
      </StMenu>
    </StIconWrapper>
  )
}
