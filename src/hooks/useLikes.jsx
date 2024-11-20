import { useState, useEffect, useCallback } from 'react'
import {
  getLikesCount,
  addLike,
  removeLike,
  checkIfUserLiked,
} from '../api/likes'

const useLikes = (postId, userId) => {
  const [likesCount, setLikesCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const fetchLikes = async () => {
      const likes = await getLikesCount(postId)
      setLikesCount(likes)

      const userLiked = await checkIfUserLiked(postId, userId)
      setIsLiked(userLiked)
    }

    fetchLikes()
  }, [postId, userId])

  const toggleLike = useCallback(async () => {
    if (isLiked) {
      const success = await removeLike(postId, userId)
      if (success) {
        setLikesCount((prev) => prev - 1)
        setIsLiked(false)
      }
    } else {
      const success = await addLike(postId, userId)
      if (success) {
        setLikesCount((prev) => prev + 1)
        setIsLiked(true)
      }
    }
  }, [isLiked, postId, userId])

  return { likesCount, isLiked, toggleLike }
}

export default useLikes
