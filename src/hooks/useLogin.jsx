import { useNavigate } from 'react-router-dom'
import { login } from '../api/users'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLogIn } from '../redux/slices/loginSlice'

const useLogin = () => {
  const nav = useNavigate()
  const loginData = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const [emptyError, setEmptyError] = useState(false)
  const resetErrors = (errorType) => {
    switch (errorType) {
      case 'emptyError':
        setEmptyError(false)
        break
      default:
        break
    }
  }
  const signUpHandler = () => {
    nav('/signup')
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
    login(email, password, nav)
    dispatch(isLogIn())
  }
  return { signUpHandler, loginHandler, emptyError, resetErrors }
}
export default useLogin
