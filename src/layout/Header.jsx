import SearchInput from '../components/SearchInput'
import {
  StLogo,
  StGnbContainer,
  StGnbLeftWrapper,
} from '../styles/layout/HeaderStyle'
import { UserProfile } from '../components/UserProfile'

const Header = () => {
  return (
    <StGnbContainer>
      <StGnbLeftWrapper>
        <StLogo>CodeGym</StLogo>
        <SearchInput />
      </StGnbLeftWrapper>
      <UserProfile />
    </StGnbContainer>
  )
}

export default Header
