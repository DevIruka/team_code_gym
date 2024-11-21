import MyPostContainer from '../components/my_post/MyPostContainer'
import MyPostUserInfo from '../components/my_post/MyPostUserInfo'
import { StyledMyPostPage } from '../../src/styles/components/mypost_style/StyledMyPostPage'
import ToHomeButton from '../components/button/ToHomeButton'
import ScrollToTopButton from '../components/button/ScrollToTopButton'

const MyPost = () => {
  return (
    <StyledMyPostPage>
      <ScrollToTopButton></ScrollToTopButton>
      <ToHomeButton></ToHomeButton>
      <MyPostUserInfo></MyPostUserInfo>
      <MyPostContainer></MyPostContainer>
    </StyledMyPostPage>
  )
}
export default MyPost
