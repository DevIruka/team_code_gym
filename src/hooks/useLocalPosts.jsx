import { useState, useEffect, useCallback } from 'react'

const useLocalPosts = (initialPosts) => {
  const [localPosts, setLocalPosts] = useState(initialPosts)

  // posts가 업데이트될 때 localPosts 동기화
  useEffect(() => {
    setLocalPosts(initialPosts)
  }, [initialPosts])

  const deletePost = useCallback(
    (postId) => {
      setLocalPosts((prevPosts) =>
        prevPosts.filter((post) => post.post_id !== postId)
      )
    },
    [setLocalPosts]
  )

  return { localPosts, deletePost }
}

export default useLocalPosts

// To. 문식님 :)
/* useLocalPost 설명:

Supabase에서 받은 initialPosts를 localPosts 상태에 저장하고, useEffect로 initialPosts가 변경되면 localPosts를 업데이트를 하는 용도에요. 
(쉽게말하면 즉각적으로 포스트 삭제 시 UI 변경하려고 만든 겁니다. 리덕스 쓸까하다가.. 어차피 PostCardContainer에서만 써서 걍 쉽게하려고 만들었어요 )

사용자가 삭제 버튼을 클릭하면 deletePost(postId)가 호출되고(여기는 PostCardContainer에서 확인하실 수 있어요), setLocalPosts를 사용해서 로컬 상태에서 해당 게시물을 제외하고 상태를 업데이트해요. 
그 후에 localPosts랑 deletPost가 리턴됩니당.

정리하자면, localPosts는 현재 로컬에서 관리 중인 게시물 목록이고, deletePost는 로컬 상태에서 삭제하려고하는 그 특정 포스트를 삭제하는 함수입니다 */
