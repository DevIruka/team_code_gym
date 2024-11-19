import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { currentDate } from '../util/currentDate'
import { useSelector } from 'react-redux'
import { useNickname } from './useNickname'
import { createPost } from '../api/posts'

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

export const usePostData = () => {
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSuccess(false)
    setError(false)
    try {
      await createPost({ ...postData, createdAt: currentDate() })
      setIsSuccess(true)
    } catch (error) {
      setError(true)
      setIsSuccess(false)
    }
  }

  useEffect(() => {
    if (userId && nickname) {
      setPostData((prev) => ({ ...prev, userId, nickname }))
    }
  }, [userId, nickname])

  return { postData, isSuccess, error, handleChange, handleSubmit }
}
