import React from 'react'
import { StMenuItem } from '../styles/components/UserMenuStyle'
import { Avatar, Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import EditIcon from '@mui/icons-material/Edit'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'

export const UserMenu = ({ onClose }) => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    if (path) navigate(path)
    onClose()
  }

  return (
    <>
      <StMenuItem>
        {/* TODO : table에서 user정보 가져오기 */}
        <Avatar className="menu-icon" /> 김은지
      </StMenuItem>
      <Divider />
      <StMenuItem onClick={() => handleNavigate('/mypage')}>
        <SettingsIcon className="menu-icon" /> 마이페이지
      </StMenuItem>
      <StMenuItem onClick={() => handleNavigate('/mypost')}>
        <EditIcon className="menu-icon" /> 마이포스트
      </StMenuItem>
      <Divider />
      {/* TODO : 로그아웃 버튼 핸들러 만들기 */}
      <StMenuItem onClick={() => handleNavigate('')}>
        <LogoutIcon className="menu-icon" /> 로그아웃
      </StMenuItem>
    </>
  )
}
