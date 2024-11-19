import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import supabase from '../api/supabaseClient'

// home과 my post 페이지를 위한 훅
// 역할 정리:
// (1) home이 true일 때, 모든 포스트를 보여줘요.
// (2) home이 false일 때는, home이 아닌 거니까 my post 페이지를 뜻하고,
// useselector로 받아온 userid가 있다면 그 userid와 동일한 userid를 갖는 포스트만! 보여주게하는 로직입니다.

// TODO: 로그인 안된 상태에서 my post 접근했을 때 바로 log in 페이지로 넘어가게 할 계획인지 다시 확인 필요.

// 즉, home페이지에서 사용하실 떄는 그냥 true만 넣어주시고, my post에서 쓰실 때는 false를 넣어주면 됩니다.

const useFetchPosts = (isHome) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const userId = useSelector((state) => state.userData) // 아이디 받음

  console.log('아이디:', userId)
  // 테스트용

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)
      try {
        const query = supabase
          .from('posts')
          .select('title, content, code, programming_language')

        let data, error

        if (isHome) {
          ;({ data, error } = await query)
        } else if (userId) {
          ;({ data, error } = await query.eq('user_id', userId))
          console.log('내꺼', data)
        }

        if (error) {
          throw error
        }

        setPosts(data || [])
      } catch (err) {
        console.error('Supabase 에러:', err.message)
        setError(err.message)
      } finally {
        setLoading(false)
        //완료 되면 로딩 없어짐.
      }
    }

    fetchPosts()
  }, [isHome, userId])
  // home페이지에서 myPage로 바뀔때, userId 바뀔 때 상태 관리해줌.

  return { posts, loading, error }
}

export default useFetchPosts