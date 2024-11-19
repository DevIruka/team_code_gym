import React from 'react'
import StyledCardContainer from '../../styles/components/mypost_style/StyledCardContainer'
import PostCard from './PostCard'
import useFetchPosts from '../../hooks/useFetchPosts'

const PostCardContainer = ({ isHome }) => {
  // Hook을 통해 게시물 데이터 가져오기
  const { posts, loading, error } = useFetchPosts(isHome)

  // TODO: 밑에 부분을 toast alert로 해도 되고, 아니면 아예 div 디자인을 입혀도 될 것 같은데, 중요도가 낮으니 나중에 시간이 되면 상의해봅시다.
  if (loading) {
    return <div>포스트 로딩중 ...</div>
  }

  if (error) {
    return <div>데이터 불러오기 실패함: {error}</div>
  }

  if (posts.length === 0) {
    return <div>포스트 없음</div>
  }

  return (
    <StyledCardContainer>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </StyledCardContainer>
  )
}

export default PostCardContainer
