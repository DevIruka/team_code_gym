import {
  StFieldset,
  StForm,
  StFormWrapper,
  StTitle,
} from '../../styles/components/signup_style/SignupStyle'
import BtnContainer from './BtnContainer'
import { InputContainerEmail, InputContainerPassword } from './InputContainer'

const LoginForm = ({ loginHandler, signUpHandler }) => {
  return (
    <StFormWrapper>
      <StForm onSubmit={loginHandler}>
        <StFieldset>
          <StTitle>Login</StTitle>
          <InputContainerEmail />
          <InputContainerPassword />
          <BtnContainer signUpHandler={signUpHandler} />
        </StFieldset>
      </StForm>
    </StFormWrapper>
  )
}
export default LoginForm
