import {
  Stbtn,
  StFieldset,
  StForm,
  StFormWrapper,
  StInput,
  StInputWrapper,
} from '../styles/components/signup_style/SignupStyle'
import { StBtnWrapper } from '../styles/components/login_style/LoginStyle'
import { useNavigate } from 'react-router-dom'
import supabase from '../api/supabaseClient'

const Login = () => {
  const nav = useNavigate()
  const signUpHandler = () => {
    nav('/signup')
  }
  const loginHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    if (!email || !password) {
      alert('모든 필드를 입력해주세요.')
      return
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      alert('로그인 성공!')
      nav('/')
    } catch (error) {
      console.log('로그인 실패!:', error)
    }
  }

  return (
    <>
      <StFormWrapper>
        <StForm onSubmit={loginHandler}>
          <StFieldset>
            <span>로그인</span>
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
            <StBtnWrapper>
              <Stbtn>로그인</Stbtn>
              <Stbtn type="button" onClick={signUpHandler}>
                회원가입
              </Stbtn>
            </StBtnWrapper>
          </StFieldset>
        </StForm>
      </StFormWrapper>
    </>
  )
}
export default Login
