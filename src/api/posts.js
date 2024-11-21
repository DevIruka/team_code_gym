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

// 포스트 생성
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

// 수정할 포스트 찾기
export const getPostByPostId = async (postId) => {
  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('post_id', postId)
    if (error) throw error
    return post[0]
  } catch (error) {
    console.error(`해당 포스트 가져오기 실패: ${postId}:`, error.message)
    throw error
  }
}

// 수정할 포스트 업데이트
export const updatePost = async (postId, postData) => {
  try {
    const { data } = await supabase
      .from('posts')
      .update({
        created_at: postData.createdAt,
        title: postData.title,
        content: postData.content,
        code: postData.code,
        programming_language: postData.language,
      })
      .eq('post_id', postId)
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
      .select('*')
      .or(
        `title.ilike.%${query}%,content.ilike.%${query}%,nickname.ilike.%${query}%`
      )
    if (error) throw error
    return data
  } catch (error) {
    console.error('검색된 포스트 가져오기 실패:', error.message)
    throw error
  }
}
