import LoginForm from '../components/signup_login/LoginForm'
import Header from '../components/signup_login/Header'
import useLogin from '../hooks/useLogin'
import useToastNotifications from '../hooks/useToastNotification'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const Login = () => {
  const {
    signUpHandler,
    loginHandler,
    emptyError,
    loginError,
    setloginError,
    resetErrors,
  } = useLogin()
  const loginData = useSelector((state) => state.login)
  useToastNotifications({
    loginData,
    emptyError,
    loginError,
    setloginError,
    resetErrors,
  })
  return (
    <>
      <LoginForm signUpHandler={signUpHandler} loginHandler={loginHandler} />
      <ToastContainer />
    </>
  )
}
export default Login
