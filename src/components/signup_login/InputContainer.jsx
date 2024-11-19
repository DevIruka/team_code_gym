import {
  StCheckWrapper,
  StInput,
  StInputWrapper,
  StLabel,
} from '../../styles/components/signup_style/SignupStyle'

const InputContainerNickname = () => {
  return (
    <StInputWrapper>
      <StLabel>User Name</StLabel>
      <StInput
        type="text"
        name="nickname"
      />
    </StInputWrapper>
  )
}

const InputContainerEmail = () => {
  return (
    <StInputWrapper>
      <StLabel>E-mail</StLabel>
      <StInput type="email" name="email" />
    </StInputWrapper>
  )
}

const InputContainerPassword = () => {
  return (
    <StInputWrapper>
      <StLabel>Password</StLabel>
      <StInput
        type="password"
        name="password"
      />
    </StInputWrapper>
  )
}

const InputContainerCheck = ({ isAgreed, handleCheckboxChange }) => {
  return (
    <StCheckWrapper>
      <input
        type="checkbox"
        id="agree"
        checked={isAgreed}
        onChange={handleCheckboxChange}
      />
      <StLabel>Agree</StLabel>
    </StCheckWrapper>
  )
}

export {
  InputContainerNickname,
  InputContainerEmail,
  InputContainerPassword,
  InputContainerCheck,
}
