import HomePostContainer from '../components/home/HomePostContainer'
import LanguageFilterBar from '../style/components/home_style/LanguageFilterStyle'
const Home = () => {
  return (
    <div>
      <LanguageFilterBar></LanguageFilterBar>
      <HomePostContainer></HomePostContainer>
    </div>
  )
}
export default Home
