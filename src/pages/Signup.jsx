import SignupForm from '../components/signup_login/SignupForm'
import useSignup from '../hooks/useSignup'
import { ToastContainer } from 'react-toastify'
import useToastNotifications from '../hooks/useToastNotification'
import Header from '../components/signup_login/Header'

const Signup = () => {
  const {
    handleCheckboxChange,
    onSubmitHandler,
    isAgreed,
    signupSuccess,
    checkError,
    emptyError,
    passwordError,
    resetErrors,
  } = useSignup()

  useToastNotifications({
    signupSuccess,
    checkError,
    emptyError,
    passwordError,
    resetErrors,
  })

  return (
    <>
      <Header/>
      <SignupForm
        onSubmitHandler={onSubmitHandler}
        handleCheckboxChange={handleCheckboxChange}
        isAgreed={isAgreed}
      />
      <ToastContainer />
    </>
  )
}

export default Signup
