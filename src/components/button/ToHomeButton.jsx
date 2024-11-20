import React from 'react'
import { StyledFloatingButton } from '../../styles/components/button/StyledFloatingButton'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'

const ToHomeButton = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }

  return (
    <StyledFloatingButton
      right={'40px'}
      backgroundColor={'#4caf50'}
      hoverColor={'#45a049'}
      onClick={goHome}
    >
      <HomeIcon />
    </StyledFloatingButton>
  )
}

export default ToHomeButton
