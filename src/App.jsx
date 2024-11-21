import { useEffect, useState } from 'react'
import supabase from './api/supabaseClient'
import Router from './shared/Router'
import GlobalStyle from './styles/base/GlobalStyle'
import { useDispatch, useSelector } from 'react-redux'
import { isLogIn, isLogout } from './redux/slices/loginSlice'
import { getUserData } from './redux/slices/userDataSlice'

function App() {
  const loginData = useSelector((state) => state.login)
  const userData = useSelector((state) => state.userData)
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        const {
          user: { id },
        } = session
        setIsLogin(true)
        dispatch(isLogIn())
        dispatch(getUserData(id))
      } else {
        setIsLogin(false)
        dispatch(isLogout())
      }
    })
    return () => subscription.unsubscribe()
  }, [])
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
