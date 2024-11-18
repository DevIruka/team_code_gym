import SearchInput from '../components/header/SearchInput'
import { UserProfile } from '../components/header/UserProfile'
import {
  StLogo,
  StGnbContainer,
  StGnbLeftWrapper,
  StLink,
} from '../styles/layout/HeaderStyle'

const Header = () => {
  return (
    <StGnbContainer>
      <StGnbLeftWrapper>
        <StLink to="/">
          <StLogo>CodeGym</StLogo>
        </StLink>
        <SearchInput />
      </StGnbLeftWrapper>
      <UserProfile />
    </StGnbContainer>
  )
}

export default Header
