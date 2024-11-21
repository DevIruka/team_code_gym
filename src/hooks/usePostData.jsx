import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { currentDate } from '../util/currentDate'
import { useSelector } from 'react-redux'
import { useNickname } from './useNickname'
import { createPost, getPostByPostId, updatePost } from '../api/posts'

const initialPostData = {
  postId: uuidv4(),
  userId: '',
  createdAt: '',
  nickname: '',
  title: '',
  content: '',
  code: '',
  language: 'JavaScript',
}

export const usePostData = (postId) => {
  const userId = useSelector((state) => state.userData)
  const nickname = useNickname(userId)

  const [postData, setPostData] = useState(initialPostData)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const fetchPostData = async (postId) => {
    const post = await getPostByPostId(postId)
    if (post) {
      setPostData({
        createdAt: post.created_at,
        title: post.title,
        content: post.content,
        code: post.code,
        language: post.programming_language,
      })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSuccess(false)
    setError(false)
    try {
      if (postId) {
        await updatePost(postId, postData)
        setIsSuccess(true)
      } else {
        await createPost({ ...postData, createdAt: currentDate() })
        setIsSuccess(true)
      }
    } catch (error) {
      setError(true)
      setIsSuccess(false)
    }
  }

  useEffect(() => {
    if (postId) {
      fetchPostData(postId)
    }
  }, [postId])

  useEffect(() => {
    if (userId && nickname) {
      setPostData((prev) => ({ ...prev, userId, nickname }))
    }
  }, [userId, nickname])

  return {
    postData,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    setPostData,
  }
}
