import React from 'react'
import {
  StMenuItem,
  UserProfileImg,
} from '../../styles/components/header_style/UserMenuStyle'
import { Avatar, Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import { useNavigate } from 'react-router-dom'
import { useNickname } from '../../hooks/useNickname'
import { logout } from '../../api/users'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserData } from '../../redux/slices/userDataSlice'

export const UserMenu = ({ userId, profileImage, onClose }) => {
  const isLogin = useSelector((state) => state.login)
  const nickname = useNickname(userId)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleNavigate = (path) => {
    navigate(path)
    onClose()
  }

  const handleLogout = async () => {
    await logout()
    dispatch(removeUserData())
    navigate('/login')
    onClose()
  }

  return (
    <>
      {isLogin ? (
        <>
          <StMenuItem>
            {profileImage.includes('default') ? (
              <Avatar className="menu-icon profile" />
            ) : (
              <UserProfileImg src={profileImage} />
            )}
            {nickname}
          </StMenuItem>
          <Divider />
          <StMenuItem onClick={() => handleNavigate('/mypage')}>
            <SettingsIcon className="menu-icon" /> 마이페이지
          </StMenuItem>
          <StMenuItem onClick={() => handleNavigate('/mypost')}>
            <EditIcon className="menu-icon" /> 마이포스트
          </StMenuItem>
          <Divider />
          <StMenuItem onClick={handleLogout}>
            <LogoutIcon className="menu-icon" /> 로그아웃
          </StMenuItem>
        </>
      ) : (
        <StMenuItem onClick={() => handleNavigate('/login')}>
          <LoginIcon className="menu-icon" /> 로그인
        </StMenuItem>
      )}
    </>
  )
}
