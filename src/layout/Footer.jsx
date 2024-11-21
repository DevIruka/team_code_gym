import { FaGithub } from 'react-icons/fa'
import { StFooter } from '../styles/layout/FooterStyle'

const Footer = () => {
  return (
    <StFooter>
      <FaGithub className="github-icon" />
      <a href="https://github.com/DevIruka/team_code_gym" target="_blank">
        뀨조 Github Link
      </a>
      👈
    </StFooter>
  )
}
export default Footer
