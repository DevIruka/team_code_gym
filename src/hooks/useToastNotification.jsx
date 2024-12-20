import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const useToastNotifications = ({
  loginData,
  signupSuccess,
  checkError,
  emptyError,
  passwordError,
  loginError,
  setloginError,
  resetErrors,
}) => {
  const nav = useNavigate()

  useEffect(() => {
    if (signupSuccess) {
      console.log(signupSuccess)
      toast.success('회원가입에 성공하였습니다.', {
        autoClose: 2000,
      })
      setTimeout(() => {
        nav('/')
      }, 2500)
    }
    if (loginData) {
      toast.success('로그인에 성공하였습니다.', {
        autoClose: 2000,
      })
      setloginError(false)
      setTimeout(() => {
        nav('/')
      }, 2500)
    }
    if (checkError) {
      toast.error('코드 공유에 동의해주세요')
      resetErrors('checkError')
    }
    if (emptyError) {
      toast.error('모든 필드를 채워주세요.')
      resetErrors('emptyError')
    }
    if (passwordError) {
      toast.error('비밀번호는 6자리 이상이여야합니다.')
      resetErrors('passwordError')
    }
    if (loginError) {
      toast.error('로그인에 실패하였습니다. 비밀번호나 계정을 확인해주세요.')
      resetErrors('loginError')
    }
  }, [
    loginData,
    signupSuccess,
    checkError,
    emptyError,
    passwordError,
    loginError,
    nav,
    resetErrors,
  ])
}

export default useToastNotifications
