import supabase from './supabaseClient'

// 좋아요 추가
export const addLike = async (postId, userId) => {
  try {
    const { error } = await supabase
      .from('likes')
      .insert([{ post_id: postId, user_id: userId }])
    if (error) throw error
    return true
  } catch (err) {
    console.error('좋아요 추가 실패:', err.message)
    return false
  }
}

// 좋아요 취소
export const removeLike = async (postId, userId) => {
  try {
    const { error } = await supabase
      .from('likes')
      .delete()
      .eq('post_id', postId)
      .eq('user_id', userId)
    if (error) throw error
    return true
  } catch (err) {
    console.error('좋아요 삭제 실패:', err.message)
    return false
  }
}

// 특정 포스트의 좋아요 개수 가져오기
export const getLikesCount = async (postId) => {
  try {
    const { count, error } = await supabase
      .from('likes')
      .select('*', { count: 'exact' })
      .eq('post_id', postId)
    if (error) throw error
    return count || 0 //좋아요 개수 반환
  } catch (err) {
    console.error('좋아요 개수 가져오기 실패:', err.message)
    return 0
  }
}

// 특정 유저가 좋아요를 눌렀는지 확인
export const checkIfUserLiked = async (postId, userId) => {
  try {
    const { data, error } = await supabase
      .from('likes')
      .select('*')
      .eq('post_id', postId)
      .eq('user_id', userId)
    if (error) throw error
    return data.length > 0 // 좋아요를 누른 경우 true 반환
  } catch (err) {
    console.error('유저 좋아요 상태 확인 실패:', err.message)
    return false
  }
}
