import { StBtnWrap, StButton, StCardContent, StCardHeader, StContent, StDivLeft, StDivRight, StDivTop, StDivWrap, StH1, StSection } from "../../styles/components/detail_style/DetailStyle"
import useFetchPosts from '../../hooks/useFetchPosts'
import { useNavigate, useParams } from 'react-router-dom'
import MarkdownRenderer from '../markdown/MarkdownRenderer'
import useRedirectLogin from '../../hooks/useRedirectLogin'
import useDeletePost from "../../hooks/useDeletePost"
import useLocalPosts from "../../hooks/useLocalPosts"
import { useSelector } from "react-redux"

const DetailContainer = ({ isHome }) => {
    const { posts, loading, error } = useFetchPosts(isHome)
    const authUserId = useSelector((state) => state.userData);
    const params = useParams()
    const navigate = useNavigate();
    useRedirectLogin();

    const { deletePost } = useLocalPosts(posts)
    const handleDelete = useDeletePost((postId) => {            
        deletePost(postId) 
        navigate(-1)
    })
    const handleEdit = (postId) => {
        navigate(`/update/${postId}`)
    }

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
    const isPostOwner = authUserId === post.user_id;
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
                            <StContent distance="on">
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
                    <StBtnWrap>
                        <StButton onClick={() => navigate(-1)}>Back</StButton>
                        {isPostOwner && (
                            <>
                                <StButton onClick={() => handleEdit(post.post_id)}>Edit</StButton>
                                <StButton onClick={() => handleDelete(post.post_id)}>Delete</StButton>
                            </>
                        )}
                    </StBtnWrap>
                </StDivWrap>
            </StCardContent>
        </StSection>
    )
}

export default DetailContainer