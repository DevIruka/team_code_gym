import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { currentDate } from '../util/currentDate'
import { useSelector } from 'react-redux'
import { useNickname } from './useNickname'

const initialPostData = {
  postId: uuidv4(),
  userId: '',
  createdAt: '',
  nickname: '',
  title: '',
  content: '',
  code: '',
  language: 'Python',
}

const usePostData = () => {
  const { payload: userId } = useSelector((state) => state.userData)
  const nickname = useNickname(userId)
  const [postData, setPostData] = useState(initialPostData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPostData((prev) => ({ ...prev, createdAt: currentDate() }))
  }

  useEffect(() => {
    if (userId && nickname) {
      setPostData((prev) => ({ ...prev, userId, nickname }))
    }
  }, [userId, nickname])

  return { postData, handleChange, handleSubmit }
}

export default usePostData
