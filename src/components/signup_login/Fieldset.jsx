import {
  Stbtn,
  StFieldset,
  StTitle,
} from '../../styles/components/signup_style/SignupStyle'
import {
  InputContainerCheck,
  InputContainerEmail,
  InputContainerNickname,
  InputContainerPassword,
} from './InputContainer'

const Fieldset = ({ isAgreed, handleCheckboxChange }) => {
  return (
    <StFieldset>
      <StTitle>Sign Up</StTitle>
      <InputContainerNickname />
      <InputContainerEmail />
      <InputContainerPassword />
      <StTitle>Ready to share ALL of your code?</StTitle>
      <InputContainerCheck
        isAgreed={isAgreed}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Stbtn>Sign Up</Stbtn>
    </StFieldset>
  )
}
export default Fieldset
