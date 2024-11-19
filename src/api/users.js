import supabase from './supabaseClient'

export const login = async (email, password, nav) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    alert('로그인 성공!')
    nav('/')
  } catch (error) {
    alert('로그인에 실패하였습니다. 이메일과 비밀번호를 다시 확인해주세요.')
    console.log('로그인 실패!:', error)
  }
}

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    console.error(error.message)
  }
}

export const signup = async (email, password, nickname, nav) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    alert('회원가입에 성공했습니다!')
  } catch (error) {
    console.log('회원가입 실패:', error)
  }
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ email, nickname }])
      .select()
    if (error) throw error
  } catch (error) {
    console.log(error)
  }
  nav('/login')
}

export const getUserNickname = async (id) => {
  try {
    const { data: user } = await supabase
      .from('users')
      .select('nickname')
      .eq('user_id', id)
      .single()
    return user.nickname
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getUserProfile = async (id) => {
  try {
    const { data: user } = await supabase
      .from('users')
      .select('profile_image')
      .eq('user_id', id)
      .single()
    return user.profile_image
  } catch (error) {
    console.error(error)
    return null
  }
}
