import InputField from '../components/write/InputField'
import SelectField from '../components/write/SelectField'
import { usePostData } from '../hooks/usePostData'
import { useNavigate, useParams } from 'react-router-dom'
import {
  StButton,
  StCardContent,
  StCardHeader,
  StFormWrapper,
  StForm,
  StFormLeft,
  StFormRight,
  StFormTop,
  StFormBottom,
} from '../styles/components/write_style/WriteStyle'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Write = () => {
  const { id } = useParams()
  const { postData, isSuccess, error, handleChange, handleSubmit } =
    usePostData(id)
  const languageOptions = ['JavaScript', 'Python', 'Java', 'C++', 'C#']
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      toast.success('문제 업로드 성공했습니다', {
        autoClose: 2000,
      })
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [isSuccess])

  if (error) {
    return <p>Failed to create post</p>
  }

  return (
    <StFormWrapper>
      <StCardHeader>
        <h2>CodeGym New Problem</h2>
      </StCardHeader>
      <StCardContent>
        <StForm onSubmit={handleSubmit}>
          <StFormTop>
            <StFormLeft>
              <InputField
                id="title"
                name="title"
                value={postData.title}
                onChange={handleChange}
                label="Problem Title"
                isTitle={true}
              />
              <InputField
                id="content"
                name="content"
                value={postData.content}
                onChange={handleChange}
                label="Problem Content"
              />
            </StFormLeft>
            <StFormRight>
              <InputField
                id="code"
                name="code"
                value={postData.code}
                onChange={handleChange}
                label="Solution"
              />
            </StFormRight>
          </StFormTop>
          <StFormBottom>
            <SelectField
              id="language"
              name="language"
              value={postData.language}
              onChange={handleChange}
              options={languageOptions}
              label="Programming Language"
            />
            <StButton type="submit">Post</StButton>
          </StFormBottom>
        </StForm>
      </StCardContent>
      <ToastContainer />
    </StFormWrapper>
  )
}

export default Write
