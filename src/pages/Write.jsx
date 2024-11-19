import InputField from '../components/write/InputField'
import SelectField from '../components/write/SelectField'
import usePostData from '../hooks/usePostData'
import {
  StButton,
  StCardContent,
  StCardHeader,
  StFormWrapper,
  StFrom,
} from '../styles/components/write_style/WriteStyle'

const Write = () => {
  const { postData, handleChange, handleSubmit } = usePostData()
  const languageOptions = ['JavaScript', 'Python', 'Java', 'C++', 'C#']

  return (
    <StFormWrapper>
      <StCardHeader>
        <h2>CodeGym New Problem</h2>
      </StCardHeader>
      <StCardContent>
        <StFrom onSubmit={handleSubmit}>
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
          <InputField
            id="code"
            name="code"
            value={postData.code}
            onChange={handleChange}
            label="Solution"
          />
          <SelectField
            id="language"
            name="language"
            value={postData.language}
            onChange={handleChange}
            options={languageOptions}
            label="Programming Language"
          />

          <StButton type="submit">Post</StButton>
        </StFrom>
      </StCardContent>
    </StFormWrapper>
  )
}

export default Write
