import { useState } from 'react'
import {
  Stbtn,
  StCheckWrapper,
  StFieldset,
  StForm,
  StFormWrapper,
  StInput,
  StInputWrapper,
} from '../styles/components/signup_style/SignupStyle'

import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/users'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

const Signup = () => {
  const nav = useNavigate()
  const [isAgreed, setIsAgreed] = useState(false)
  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!isAgreed) {
      alert('체크 박스를 확인해주세요.')
      return
    }
    const formData = new FormData(e.target)
    const nickname = formData.get('nickname').trim()
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    if (!nickname || !email || !password) {
      alert('모든 필드를 입력해주세요.')
      return
    }
    if (password.length < 6) {
      alert('비밀번호는 6자리 이상이어야 합니다.')
      return
    }
    signup(email, password, nickname, nav)
    // try {
    //   const { data, error } = await supabase.auth.signUp({
    //     email,
    //     password,
    //   })
    //   if (error) throw error
    //   alert('회원가입에 성공했습니다!')
    // } catch (error) {
    //   console.log('회원가입 실패:', error)
    // }
    // try {
    //   const { data, error } = await supabase
    //     .from('users')
    //     .insert([{ email, nickname }])
    //     .select()
    //   if (error) throw error
    // } catch (error) {
    //   console.log(error)
    // }
    e.target.reset()
    setIsAgreed(false)
  }

  return (
    <>
      <StFormWrapper>
        <StForm onSubmit={onSubmitHandler}>
          <StFieldset>
            <span>회원 가입</span>
            <StInputWrapper>
              <label>유저 닉네임</label>
              <StInput
                type="text"
                name="nickname"
                placeholder="유저 닉네임을 입력해주세요."
              />
            </StInputWrapper>
            <StInputWrapper>
              <label>이메일</label>
              <StInput
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요."
              />
            </StInputWrapper>
            <StInputWrapper>
              <label>비밀번호</label>
              <StInput
                type="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </StInputWrapper>
            <span>모든 코드를 공유하실 준비 되셨습니까?</span>
            <StCheckWrapper>
              <input
                type="checkbox"
                id="agree"
                checked={isAgreed}
                onChange={handleCheckboxChange}
              />
              <label>동의함</label>
            </StCheckWrapper>
            <Stbtn>회원가입</Stbtn>
          </StFieldset>
        </StForm>
      </StFormWrapper>
    </>
  )
}
export default Signup
