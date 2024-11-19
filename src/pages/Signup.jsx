import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/users'
import SignupForm from '../components/signup_login/SignupForm'

const Signup = () => {
  const nav = useNavigate()
  const [isAgreed, setIsAgreed] = useState(false)
  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!isAgreed) {
      alert('체크 박스를 확인해주세요.')
      return
    }
    const formData = new FormData(e.target)
    const nickname = formData.get('nickname').trim()
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    if (!nickname || !email || !password) {
      alert('모든 필드를 입력해주세요.')
      return
    }
    if (password.length < 6) {
      alert('비밀번호는 6자리 이상이어야 합니다.')
      return
    }
    signup(email, password, nickname, nav)
    e.target.reset()
    setIsAgreed(false)
  }

  return (
    <>
      <SignupForm
        onSubmitHandler={onSubmitHandler}
        handleCheckboxChange={handleCheckboxChange}
        isAgreed={isAgreed}
      />
    </>
  )
}

export default Signup
