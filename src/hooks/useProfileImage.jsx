import { useEffect, useState } from 'react'
import { getUserProfile } from '../api/users'

export const useProfileImage = (userId) => {
  const [profileImg, setProfileImg] = useState('/images/default-profile.png') // 기본 이미지 설정

  useEffect(() => {
    const fetchProfileImg = async () => {
      if (userId) {
        try {
          const profileImg = await getUserProfile(userId) // API 호출
          setProfileImg(profileImg || '/images/default-profile.png') // null인 경우 기본값 설정
        } catch (error) {
          console.error('프로필 이미지 가져오기 실패:', error)
          setProfileImg('/images/default-profile.png') // 에러 발생 시 기본값
        }
      }
    }

    fetchProfileImg()
  }, [userId])

  return profileImg // 프로필 이미지 URL 반환
}
