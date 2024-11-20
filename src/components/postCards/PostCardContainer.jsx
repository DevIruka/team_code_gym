import React from 'react'
import StyledCardContainer from '../../styles/components/mypost_style/StyledCardContainer'
import PostCard from './PostCard'
import useFetchPosts from '../../hooks/useFetchPosts'
import useDeletePost from '../../hooks/useDeletePost'
import useLocalPosts from '../../hooks/useLocalPosts'
import { useSelector } from 'react-redux'
import { CleaningServices } from '@mui/icons-material'

const PostCardContainer = ({ isHome }) => {
  // Hook을 통해 게시물 데이터 가져오기
  const { posts, loading, error } = useFetchPosts(isHome)

  // 상태 관리 훅 사용
  const { localPosts, deletePost } = useLocalPosts(posts)
  const languageState = useSelector((state) => state.languageFilter)

  const handleDelete = useDeletePost((postId) => {
    deletePost(postId) // 삭제 후 로컬 상태 업데이트
  })

  // 받아온 포스트 필터 부분
  const filterPosts = (posts, languageState) => {
    // 전체 선택시 모두 보여주기
    if (languageState['All']) {
      return posts
    }

    // 선택된 태그 찾기
    const selected_tags = Object.keys(languageState)
      .filter((key) => languageState[key])
      .map((key) => key.toLowerCase())

    // 선택된 태그에 해당하는 포스트 필터링
    return posts.filter((post) => {
      if (selected_tags.includes(post.programming_language.toLowerCase())) {
        return true
      }
      return false
    })
  }

  // 포스트 예외처리
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
      {filterPosts(localPosts, languageState).map((post, index) => (
        <PostCard
          key={post.post_id}
          post={post}
          isHome={isHome}
          onDelete={handleDelete}
        />
      ))}
    </StyledCardContainer>
  )
}

export default PostCardContainer
