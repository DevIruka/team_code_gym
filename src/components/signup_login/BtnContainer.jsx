import { StBtnWrapper } from '../../styles/components/login_style/LoginStyle'
import { Stbtn } from '../../styles/components/signup_style/SignupStyle'

const BtnContainer = ({ signUpHandler }) => {
  return (
    <StBtnWrapper>
      <Stbtn>Login</Stbtn>
      <Stbtn type="button" onClick={signUpHandler}>
        Sign Up
      </Stbtn>
    </StBtnWrapper>
  )
}
export default BtnContainer
