import MyPostContainer from '../components/my_post/MyPostContainer'
import MyPostUserInfo from '../components/my_post/MyPostUserInfo'

import styled from 'styled-components'

const MyPost = () => {
  return (
    <StyledMyPostPage>
      <MyPostUserInfo></MyPostUserInfo>
      <MyPostContainer></MyPostContainer>
    </StyledMyPostPage>
  )
}
export default MyPost

const StyledMyPostPage = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
