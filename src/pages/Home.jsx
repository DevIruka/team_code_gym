import HomePostContainer from '../components/home/HomePostContainer'
import LanguageFilterBar from '../components/home/LanguageFilterBar'

const Home = () => {
  return (
    <div>
      <LanguageFilterBar />
      <HomePostContainer></HomePostContainer>
    </div>
  )
}
export default Home
