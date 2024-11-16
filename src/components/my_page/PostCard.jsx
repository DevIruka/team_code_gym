import React from 'react'
import {
  StyledCard,
  CardTitle,
  CardContext,
  CardCode,
} from '../../styles/components/mypage_style/CardStyle'
import MarkdownRenderer from '../markdown/MarkdownRenderer'

const PostCard = ({ post }) => {
  if (!post) {
    return <div>Loading...</div> // post가 없을 경우 로딩 표시
  }
  //TODO: 조금 더 나은 Loading 디자인 추가할 수도??

  return (
    <StyledCard>
      <CardTitle>{post.title}</CardTitle>
      <CardContext>{post.content}</CardContext>
      <CardCode>
        <MarkdownRenderer>{`\`\`\`${post.programming_language}\n${post.code}\n\`\`\``}</MarkdownRenderer>
      </CardCode>
    </StyledCard>
  )
}

export default PostCard
