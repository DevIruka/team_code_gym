import { StBtnWrapper } from '../../styles/components/login_style/LoginStyle'
import { Stbtn } from '../../styles/components/signup_style/SignupStyle'

const BtnContainer = ({ signUpHandler }) => {
  return (
    <StBtnWrapper>
      <Stbtn>로그인</Stbtn>
      <Stbtn type="button" onClick={signUpHandler}>
        회원가입
      </Stbtn>
    </StBtnWrapper>
  )
}
export default BtnContainer
