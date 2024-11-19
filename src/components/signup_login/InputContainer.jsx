import {
  StCheckWrapper,
  StInput,
  StInputWrapper,
  StLabel,
} from '../../styles/components/signup_style/SignupStyle'

const InputContainerNickname = () => {
  return (
    <StInputWrapper>
      <StLabel>유저 닉네임</StLabel>
      <StInput
        type="text"
        name="nickname"
        placeholder="유저 닉네임을 입력해주세요."
      />
    </StInputWrapper>
  )
}

const InputContainerEmail = () => {
  return (
    <StInputWrapper>
      <StLabel>이메일</StLabel>
      <StInput type="email" name="email" placeholder="이메일을 입력해주세요." />
    </StInputWrapper>
  )
}

const InputContainerPassword = () => {
  return (
    <StInputWrapper>
      <StLabel>비밀번호</StLabel>
      <StInput
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
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
      <StLabel>동의함</StLabel>
    </StCheckWrapper>
  )
}

export {
  InputContainerNickname,
  InputContainerEmail,
  InputContainerPassword,
  InputContainerCheck,
}
