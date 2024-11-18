import supabase from './supabaseClient'

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
