import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const useToastNotifications = ({
  loginData,
  signupSuccess,
  checkError,
  emptyError,
  passwordError,
  resetErrors,
}) => {
  const nav = useNavigate()


  useEffect(() => {
    if (signupSuccess) {
      toast.success('회원가입에 성공하였습니다. 로그인 페이지로 이동합니다.', {
        autoClose: 2000,
      })
      setTimeout(() => {
        nav('/login')
      }, 2500)
    }
    if (loginData) {
      toast.success('로그인에 성공하였습니다.', {
        autoClose: 2000,
      })
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
  }, [
    loginData,
    signupSuccess,
    checkError,
    emptyError,
    passwordError,
    nav,
    resetErrors,
  ])
}

export default useToastNotifications
