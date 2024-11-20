import HomePostContainer from '../components/home/HomePostContainer'
import { FaPencilAlt } from 'react-icons/fa'
import { StWriteButton } from '../styles/components/write_style/WriteButtonStyle'
import { useNavigate } from 'react-router-dom'
import ScrollToTopButton from '../components/button/ScrollToTopButton'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import LanguageFilterBar from '../components/home/LanguageFilterBar'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/write')
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div>
        <Header />
        <LanguageFilterBar />
        <HomePostContainer></HomePostContainer>
      </div>
      <StWriteButton onClick={handleClick}>
        <FaPencilAlt size={40} />
      </StWriteButton>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer />
    </>
  )
}
export default Home
