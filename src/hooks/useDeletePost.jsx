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

// To. 문식님 :)
/* useDeletePost 설명:

사용자가 삭제 버튼을 클릭하면 handleDelete 함수가 호출되는 형태 입니다. toastify가 confirmed 기능이 제공이 안되어서 SweetAlert2 를 사용했고,
확인 창에서 "네, 삭제합니다!"를 선택하면 Supabase API(deletePostById)를 호출하여 게시물을 삭제합니다.

삭제 성공 시 updatePosts(postId)로 로컬 상태를 업데이트하여 삭제된 게시물이 UI에서 즉시 사라지도록 합니다.(그니까 uselocalpost에서 리턴한 삭제하는 함수 자체를 받아서 그것을 이용하는 것입니다.)

만약에 너무 이 커스텀 훅들이 detail에서 쓰기 어려우셔서 가공하셔야할 것 같으면 posts.js에 제가 superbase에서 그 deletePostById 라는 로직 있는데 그거 참고하셔서 새롭게 아예 기능 구현하셔도 됩니다.
*/
