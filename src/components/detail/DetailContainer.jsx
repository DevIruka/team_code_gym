import React from 'react'
import { StButton, StCardContent, StCardHeader, StContent, StDivLeft, StDivRight, StDivTop, StDivWrap, StH1, StSection } from "../../styles/components/detail_style/DetailStyle"
import useFetchPosts from '../../hooks/useFetchPosts'
import { useNavigate, useParams } from 'react-router-dom'
import MarkdownRenderer from '../markdown/MarkdownRenderer'

const DetailContainer = ({ isHome }) => {
    const { posts, loading, error } = useFetchPosts(isHome)
    const params = useParams()
    const navigate = useNavigate();
    
    if (loading) {
        return <div>포스트 로딩중 ...</div>
    }
    
    if (error) {
    return <div>데이터 불러오기 실패함: {error}</div>
    }

    if (posts.length === 0) {
    return <div>포스트 없음</div>
    }
    const post = posts.find(post => post.post_id === params.id)
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
                            <StContent bottomMarin="on">
                                {post.title}
                            </StContent>
                            <StH1>
                                Problem Content
                            </StH1>
                            <StContent size="medium">
                                {post.content}
                            </StContent>
                        </StDivLeft>
                        <StDivRight>
                            <StH1>
                                Solution
                            </StH1>
                            <StContent size="large">
                                <MarkdownRenderer renderCode={true}>{`\`\`\`${post.programming_language}\n${post.code}\n\`\`\``}</MarkdownRenderer>
                            </StContent>
                        </StDivRight>
                    </StDivTop>
                    <StDivTop>
                        <StDivLeft>
                            <StH1>
                                Programming Language
                            </StH1>
                            <StContent>
                                {post.programming_language}
                            </StContent>
                        </StDivLeft>
                    </StDivTop>
                    <StButton onClick={() => navigate(-1)}>Back</StButton>
                </StDivWrap>
            </StCardContent>
        </StSection>
    )
}

export default DetailContainer