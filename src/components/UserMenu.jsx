import React from 'react'
import { StMenuItem } from '../styles/components/UserMenuStyle'
import { Avatar, Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'

export const UserMenu = ({ onClose }) => {
  return (
    <>
      <StMenuItem>
        <Avatar className="menu-icon" /> 김은지
      </StMenuItem>
      <Divider />
      <StMenuItem onClick={onClose}>
        <SettingsIcon className="menu-icon" /> 마이페이지
      </StMenuItem>
      <StMenuItem onClick={onClose}>
        <EditIcon className="menu-icon" /> 마이포스트
      </StMenuItem>
      <Divider />
      <StMenuItem onClick={onClose}>
        <LogoutIcon className="menu-icon" /> 로그아웃
      </StMenuItem>
    </>
  )
}
