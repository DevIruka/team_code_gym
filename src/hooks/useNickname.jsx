import { useEffect, useState } from 'react'
import { getUserNickname } from '../api/users'

export const useNickname = (userId) => {
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    const fetchNickname = async () => {
      if (userId) {
        const nickname = await getUserNickname(userId)
        setNickname(nickname || 'Guest')
      }
    }

    fetchNickname()
  }, [userId])

  return nickname
}
