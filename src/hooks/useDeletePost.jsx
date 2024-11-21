import { useCallback } from 'react'
import { deletePostById } from '../api/posts'
import Swal from 'sweetalert2'

const useDeletePost = (updatePosts) => {
  const handleDelete = useCallback(
    async (postId) => {
      const confirmed = await Swal.fire({
        title: '게시물을 삭제하시겠습니까?',
        text: '이 작업은 되돌릴 수 없습니다.',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 삭제합니다!',
        cancelButtonText: '취소',
      })

      if (confirmed.isConfirmed) {
        try {
          const success = await deletePostById(postId)
          if (success) {
            updatePosts(postId)
            await Swal.fire({
              title: '삭제 완료!',
              text: '포스트를 성공적으로 삭제했습니다.',
              confirmButtonColor: '#3085d6',
            })
          } else {
            await Swal.fire({
              title: '삭제 중 문제 발생',
              text: '포스트를 삭제하지 못했습니다.',
              confirmButtonColor: '#3085d6',
            })
          }
        } catch (error) {
          console.error('삭제 오류:', error)
          await Swal.fire({
            title: '삭제 실패',
            text: '삭제 중 문제가 발생했습니다.',
            confirmButtonColor: '#d33',
          })
        }
      }
    },
    [updatePosts]
  )

  return handleDelete
}

export default useDeletePost

