import supabase from './supabaseClient'

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
