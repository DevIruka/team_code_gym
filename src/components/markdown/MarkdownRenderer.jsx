import React from 'react'
import ReactMarkdown from 'react-markdown'
import StyledMarkdown from '../../styles/components/markdown_style/StyledMarkdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css' // 하이라이팅 스타일

const MarkdownRenderer = ({ children }) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {children}
      </ReactMarkdown>
    </StyledMarkdown>
  )
}

export default MarkdownRenderer
