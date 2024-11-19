import React from 'react'
import StyledCardContainer from '../../styles/components/mypost_style/StyledCardContainer'
import PostCard from './PostCard'
import useFetchPosts from '../../hooks/useFetchPosts'
import { useSelector } from 'react-redux'
import { CleaningServices } from '@mui/icons-material'

const PostCardContainer = ({ isHome }) => {
  // Hook을 통해 게시물 데이터 가져오기
  const { posts, loading, error } = useFetchPosts(isHome)
  const languageState = useSelector((state) => state.languageFilter)

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

  return (
    <StyledCardContainer>
      {filterPosts(posts, languageState).map((post, index) => (
        // TODO: key 부분 id로 바꿔야하는지 논의 필요
        <PostCard key={index} post={post} />
      ))}
    </StyledCardContainer>
  )
}

export default PostCardContainer
