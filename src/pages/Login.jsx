import { useNavigate } from 'react-router-dom'
import { login } from '../api/users'
import LoginForm from '../components/signup_login/LoginForm'

const Login = () => {
  const nav = useNavigate()
  const signUpHandler = () => {
    nav('/signup')
  }
  const loginHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()
    if (!email || !password) {
      alert('모든 필드를 입력해주세요.')
      return
    }
    login(email, password, nav)
  }
  return (
    <>
      <LoginForm signUpHandler={signUpHandler} loginHandler={loginHandler} />
    </>
  )
}
export default Login
