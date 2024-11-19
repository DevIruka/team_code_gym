import { StCardContent, StCardHeader, StContent, StDivLeft, StDivRight, StDivTop, StDivWrap, StH1, StSection } from "../styles/components/detail_style/DetailStyle"

const Detail = () => {
  return (
    <StSection>
        <StCardHeader>
            <h2>CodeGym Details</h2>
        </StCardHeader>
        <StCardContent>
            <StDivWrap>
                <StDivTop>
                    <StDivLeft>
                        <StH1>
                            Problem Title
                        </StH1>
                        <StContent size="">
                            asdfasd
                        </StContent>
                        <StH1>
                            Problem Content
                        </StH1>
                        <StContent size="extraLarge">
                            asdfasd
                        </StContent>
                    </StDivLeft>
                    <StDivRight>
                        <StH1>
                            Solution
                        </StH1>
                        <StContent size="medium">
                            asdfasd
                        </StContent>
                        <StH1>
                            Explanation
                        </StH1>
                        <StContent size="medium">
                            asdfasd
                        </StContent>
                    </StDivRight>
                </StDivTop>
            </StDivWrap>
        </StCardContent>
    </StSection>
  )
}
export default Detail