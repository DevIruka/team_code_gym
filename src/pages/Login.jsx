import styled from 'styled-components'
import {
  Stbtn,
  StFieldset,
  StForm,
  StFormWrapper,
  StInput,
  StInputWrapper,
} from '../styles/components/signup_style/SignupStyle'

const StBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Login = () => {
  return (
    <>
      <StFormWrapper>
        <StForm>
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
              <Stbtn>회원가입</Stbtn>
            </StBtnWrapper>
          </StFieldset>
        </StForm>
      </StFormWrapper>
    </>
  )
}
export default Login
