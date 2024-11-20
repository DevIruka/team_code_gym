import { useNavigate } from 'react-router-dom'
import { login } from '../api/users'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLogIn } from '../redux/slices/loginSlice'

const useLogin = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const [emptyError, setEmptyError] = useState(false)
  const [loginError, setloginError] = useState(false)
  const resetErrors = (errorType) => {
    switch (errorType) {
      case 'emptyError':
        setEmptyError(false)
        break
      case 'loginError':
        setloginError(false)
        break
      default:
        break
    }
  }
  const signUpHandler = () => {
    nav('/')
  }
  const loginHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    if (!email || !password) {
      setEmptyError(true)
      return
    }
    const result = await login(email, password, nav)
    const logindata = result.success
    if (!logindata) {
      setloginError(true)
    }
  }
  return {
    signUpHandler,
    loginHandler,
    emptyError,
    loginError,
    setloginError,
    resetErrors,
  }
}
export default useLogin
