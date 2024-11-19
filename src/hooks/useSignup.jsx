import { useState } from 'react'
import { signup } from '../api/users'

const useSignup = () => {
  const [signupSuccess, setsignupSuccess] = useState()
  const [checkError, setCheckError] = useState(false)
  const [emptyError, setEmptyError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)
  const resetErrors = (errorType) => {
    switch (errorType) {
      case 'checkError':
        setCheckError(false)
        break
      case 'emptyError':
        setEmptyError(false)
        break
      case 'passwordError':
        setPasswordError(false)
        break
      default:
        break
    }
  }
  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (!isAgreed) {
      setCheckError(true)
      return
    }
    const formData = new FormData(e.target)
    const nickname = formData.get('nickname').trim()
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    if (!nickname || !email || !password) {
      setEmptyError(true)
      return
    }
    if (password.length < 6) {
      setPasswordError(true)
      return
    }
    signup(email, password, nickname)
    e.target.reset()
    setIsAgreed(false)
    setsignupSuccess(true)
  }
  return {
    handleCheckboxChange,
    onSubmitHandler,
    isAgreed,
    signupSuccess,
    checkError,
    emptyError,
    passwordError,
    resetErrors,
  }
}
export default useSignup
