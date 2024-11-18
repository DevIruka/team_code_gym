/* TODO:  화면 사이즈가 바뀌어도
 card를 항상 한 줄에 두개씩 고정할 건지
 card가 화면 사이즈에 맞게 한 줄에 여러개 들어가게 할지 말지를 정하면 좋겠습니다.*/

import React, { useState, useEffect } from 'react'
import StyledCardContainer from '../../styles/components/mypost_style/StyledCardContainer'
import supabase from '../../api/supabaseClient'
import PostCard from './PostCard'

const PostCardContainer = () => {
  const [posts, setPosts] = useState([])

  // TODO: supabase에서 정보를 가져올 때 hook을 사용하는 등의 추가적인 리펙토링이 필요할 수도 있을 것 같습니다.
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('title, content, code, programming_language')
      if (error) {
        console.error('posts에서 정보가져오기 실패함:', error)
      } else {
        console.log('Fetched posts:', data) // 디버깅용
        setPosts(data)
      }
    }

    fetchPosts()
  }, [])

  // TODO: 지금은 redux 사용하지 않아서 일단은 props로 넘겨주는 방식입니다. 나중에 refactoring 해야될 것 같습니다.
  return (
    <StyledCardContainer>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </StyledCardContainer>
  )
}

export default PostCardContainer
