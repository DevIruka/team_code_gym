import React from 'react'
import {
  StyledCard,
  CardTitle,
  CardContext,
  CardContextWrapper,
  CardContextArea,
  CardCode,
  CardHeader,
  UserInfoContainer,
  CardNickname,
  CardProfileImg,
} from '../../styles/components/mypost_style/CardStyle'
import { CardActions } from '../../styles/components/mypost_style/CardActions'
import { ActionButton } from '../../styles/components/mypost_style/ActionButton'
import MarkdownRenderer from '../markdown/MarkdownRenderer'
import { useNickname } from '../../hooks/useNickname'
import { useProfileImage } from '../../hooks/useProfileImage'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const PostCard = ({ post, isHome, onDelete }) => {
  // 각 카드 클릭 시 detail 페이지로 이동
  const navigate = useNavigate()

  const handleEdit = (e) => {
    e.stopPropagation()
    navigate(`/update/${post.post_id}`)
  } // 수정 버튼 클릭하면 수정 페이지로

  const handleClick = () => {
    navigate(`/detail/${post.post_id}`) // 해당 게시물의 id로 Detail 페이지 이동
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    onDelete(post.post_id)
  } // 삭제 기능

  const nickname = useNickname(post.user_id)
  const profileImage = useProfileImage(post.user_id)

  return (
    <StyledCard onClick={handleClick}>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <UserInfoContainer>
          <CardProfileImg src={profileImage}></CardProfileImg>
          <CardNickname>{nickname}</CardNickname>
        </UserInfoContainer>
      </CardHeader>

      <CardContextArea>
        <CardContextWrapper>
          <CardContext>{post.content}</CardContext>
        </CardContextWrapper>
      </CardContextArea>

      <CardCode>
        <MarkdownRenderer>{`\`\`\`${post.programming_language}\n${post.code}\n\`\`\``}</MarkdownRenderer>
      </CardCode>

      {!isHome && (
        <CardActions>
          <ActionButton onClick={handleEdit}>
            <EditIcon /> 수정
          </ActionButton>
          <ActionButton onClick={handleDelete}>
            <DeleteIcon /> 삭제
          </ActionButton>
        </CardActions>
      )}
    </StyledCard>
  )
}

export default PostCard
