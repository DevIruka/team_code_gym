import React from 'react'
import ReactMarkdown from 'react-markdown'
import { StyledDetailMarkdown, StyledMarkdown } from '../../styles/components/markdown_style/StyledMarkdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css';// 하이라이팅 스타일

const MarkdownRenderer = ({ children, renderCode }) => {
  return (
    <>
      {!renderCode ? (
        <StyledMarkdown>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {children}
            </ReactMarkdown>
        </StyledMarkdown>
      ) : (        
        <StyledDetailMarkdown>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {children}
            </ReactMarkdown>    
        </StyledDetailMarkdown>
      )}
    </>
  )
}

export default MarkdownRenderer
