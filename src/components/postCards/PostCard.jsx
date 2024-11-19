import React from 'react'
import {
  StyledCard,
  CardTitle,
  CardContext,
  CardCode,
  CardHeader,
  UserInfoContainer,
  CardNickname,
  CardProfileImg,
} from '../../styles/components/mypost_style/CardStyle'
import MarkdownRenderer from '../markdown/MarkdownRenderer'
import { useNickname } from '../../hooks/useNickname'
import { useProfileImage } from '../../hooks/useProfileImage'
import { useNavigate } from 'react-router-dom'

const PostCard = ({ post }) => {
  if (!post) {
    return <div>Loading...</div> // post가 없을 경우 로딩 표시
  }
  //TODO: 조금 더 나은 Loading 디자인 추가할 수도??

  // // 각 카드 클릭 시 detail 페이지로 이동
  // const navigate = useNavigate()




  const nickname = useNickname(post.user_id)
  const profileImage = useProfileImage(post.user_id)

  return (
    <StyledCard>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <UserInfoContainer>
          <CardProfileImg src={profileImage}></CardProfileImg>
          <CardNickname>{nickname}</CardNickname>
        </UserInfoContainer>
      </CardHeader>

      <CardContext>{post.content}</CardContext>
      <CardCode>
        <MarkdownRenderer>{`\`\`\`${post.programming_language}\n${post.code}\n\`\`\``}</MarkdownRenderer>
      </CardCode>
    </StyledCard>
  )
}

export default PostCard
