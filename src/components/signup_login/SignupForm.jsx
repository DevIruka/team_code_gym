import {
  StForm,
  StFormWrapper,
} from '../../styles/components/signup_style/SignupStyle'
import Fieldset from './Fieldset'

const SignupForm = ({ onSubmitHandler, isAgreed, handleCheckboxChange }) => {
  return (
    <StFormWrapper>
      <StForm onSubmit={onSubmitHandler}>
        <Fieldset
          isAgreed={isAgreed}
          handleCheckboxChange={handleCheckboxChange}
        />
      </StForm>
    </StFormWrapper>
  )
}
export default SignupForm
