import React from 'react'
import { StMenuItem } from '../../styles/components/header_style/UserMenuStyle'
import { Avatar, Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNickname } from '../../hooks/useNickname'
import { logout } from '../../api/users'

export const UserMenu = ({ onClose }) => {
  const { payload: userId } = useSelector((state) => state.userData)
  const nickname = useNickname(userId)
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
    onClose()
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
    onClose()
  }

  return (
    <>
      <StMenuItem>
        <Avatar className="menu-icon" /> {nickname}
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
  )
}
