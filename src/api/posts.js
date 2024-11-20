import supabase from './supabaseClient'

// 모든 포스트 가져오기
export const getAllPosts = async () => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('title, content, code, programming_language, user_id, post_id')
    if (error) throw error
    return data
  } catch (error) {
    console.error('모든 포스트 가져오기 실패:', error.message)
    throw error
  }
}

// 특정 사용자의 포스트 가져오기
export const getPostsByUserId = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('title, content, code, programming_language, user_id, post_id')
      .eq('user_id', userId)
    if (error) throw error
    return data
  } catch (error) {
    console.error(`해당 유저 포스트 가져오기 실패: ${userId}:`, error.message)
    throw error
  }
}

// 포스트 삭제
export const deletePostById = async (postId) => {
  try {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('post_id', postId)
    if (error) throw error
    return true
  } catch (error) {
    console.error('포스트 삭제 실패:', error.message)
    return false
  }
}

export const createPost = async (postData) => {
  try {
    const { data } = await supabase
      .from('posts')
      .insert([
        {
          post_id: postData.postId,
          user_id: postData.userId,
          created_at: postData.createdAt,
          nickname: postData.nickname,
          title: postData.title,
          content: postData.content,
          code: postData.code,
          programming_language: postData.language,
        },
      ])
      .select()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

// 검색된 포스트 가져오기
export const getSearchedPost = async (query) => {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select()
      .textSearch('title', query)
    if (error) throw error
    return data
  } catch (error) {
    console.error('검색된 포스트 가져오기 실패:', error.message)
    throw error
  }
}
