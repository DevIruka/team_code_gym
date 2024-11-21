import supabase from './supabaseClient'

export const login = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.log('로그인 실패!:', error)
    return { success: false, error: error.message }
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

export const signup = async (email, password, nickname) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) throw error
    console.log('회원가입 성공')
  } catch (error) {
    console.log('회원가입 실패:', error)
  }
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ email, nickname }])
      .select()
    if (error) throw error
    return { success: true, error }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
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
