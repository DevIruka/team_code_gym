import SearchInput from '../components/SearchInput'
import {
  StLogo,
  StGnbRightWrapper,
  StGnbContainer,
  StGnbLeftWrapper,
} from '../styles/layout/HeaderStyle'
import { IoPersonCircleOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <StGnbContainer>
      <StGnbLeftWrapper>
        <StLogo>CodeGym</StLogo>
        <SearchInput />
      </StGnbLeftWrapper>
      <StGnbRightWrapper>
        <IoPersonCircleOutline />
      </StGnbRightWrapper>
    </StGnbContainer>
  )
}

export default Header
