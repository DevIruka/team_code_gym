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
      <StTitle>회원 가입</StTitle>
      <InputContainerNickname />
      <InputContainerEmail />
      <InputContainerPassword />
      <StTitle>모든 코드를 공유하실 준비 되셨습니까?</StTitle>
      <InputContainerCheck
        isAgreed={isAgreed}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Stbtn>회원가입</Stbtn>
    </StFieldset>
  )
}
export default Fieldset
