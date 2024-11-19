import InputField from '../components/write/InputField'
import SelectField from '../components/write/SelectField'
import usePostData from '../hooks/usePostData'
import { StFrom } from '../styles/components/write_style/WriteStyle'

const Write = () => {
  const { postData, handleChange, handleSubmit } = usePostData()
  const languageOptions = ['Python', 'JavaScript', 'Java', 'C++', 'C#']

  return (
    <StFrom onSubmit={handleSubmit}>
      <InputField
        id="title"
        name="title"
        value={postData.title}
        onChange={handleChange}
        label="Problem Title"
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

      <button type="submit">Post</button>
    </StFrom>
  )
}

export default Write
