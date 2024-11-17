import SearchInput from '../components/SearchInput'
import {
  StLogo,
  StGnbContainer,
  StGnbLeftWrapper,
  StLink,
} from '../styles/layout/HeaderStyle'
import { UserProfile } from '../components/UserProfile'

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
