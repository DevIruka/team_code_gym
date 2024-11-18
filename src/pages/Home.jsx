import PostCardContainer from '../components/my_post/PostCardContainer'
import LanguageFilterBar from '../styles/components/home_style/LanguageFilterStyle'
const Home = () => {
  return (
    <div>
      <LanguageFilterBar></LanguageFilterBar>
      <PostCardContainer></PostCardContainer>
    </div>
  )
}
export default Home
