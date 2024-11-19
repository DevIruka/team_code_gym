import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { currentDate } from '../util/currentDate'
import { useSelector } from 'react-redux'
import { useNickname } from './useNickname'
import { createPost } from '../api/posts'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await createPost({ ...postData, createdAt: currentDate() })
    if (result) {
      // TODO : alert창 띄우기
      navigate('/')
    }
  }

  useEffect(() => {
    if (userId && nickname) {
      setPostData((prev) => ({ ...prev, userId, nickname }))
    }
  }, [userId, nickname])

  return { postData, handleChange, handleSubmit }
}
