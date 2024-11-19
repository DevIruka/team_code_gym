import React from 'react'
import { useNickname } from '../../hooks/useNickname'
import { useSelector } from 'react-redux'
import { MyPostUserInfoContainer, AnimatedText} from '../../styles/components/mypost_style/MyPostUserInfoStyle'

const MyPostUserInfo = () => {
  const userId = useSelector((state) => state.userData)
  const nickname = useNickname(userId)

  return (
    <MyPostUserInfoContainer>
      <AnimatedText>
        {nickname ? `${nickname}'s posts` : 'Loading...'}
      </AnimatedText>
    </MyPostUserInfoContainer>
  )
}

export default MyPostUserInfo

