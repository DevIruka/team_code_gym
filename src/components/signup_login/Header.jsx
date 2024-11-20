import { StGnbContainer, StGnbLeftWrapper, StLink, StLogo } from "../../styles/layout/HeaderStyle"

const Header = () => {
  return (
    <StGnbContainer>
      <StGnbLeftWrapper>
        <StLink to="/">
          <StLogo>CodeGym</StLogo>
        </StLink>
      </StGnbLeftWrapper>
    </StGnbContainer>
  )
}

export default Header
