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
