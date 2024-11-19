import HomePostContainer from '../components/home/HomePostContainer'
import { FaPencilAlt } from 'react-icons/fa'
import { StWriteButton } from '../styles/components/write_style/WriteButtonStyle'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/write')
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div>
        <HomePostContainer></HomePostContainer>
      </div>
      <StWriteButton onClick={handleClick}>
        <FaPencilAlt size={40} />
      </StWriteButton>
    </>
  )
}
export default Home
