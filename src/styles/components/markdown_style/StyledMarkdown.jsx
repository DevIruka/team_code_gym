import styled from 'styled-components'

export const StyledMarkdown = styled.div`
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  line-height: 1.5;

  pre {
    background-color: #282c34;
    padding: 10px;
    // ... 추가를 위해 조정
    position: relative;
  }

  pre > code {
    overflow: hidden;
    // 최대 6줄
    max-height: calc(1.5em * 4);
    // 줄 바꿈
    white-space: pre-wrap;
    word-break: break-word;
  }

  pre > code::after {
    // ... 이 들어갈 위치 지정
    content: '...';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #282c34;
    text-align: left;
    padding-left: 20px;
    line-height: 1.5;
    height: 3em;
  }
`

export const StyledDetailMarkdown = styled.div`
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
  font-weight: 500;

  pre {
    border-radius: 5px;
    background-color: #282c34;
    box-sizing: border-box;
    height: 486px;
    padding: 10px;
    overflow: auto;
  }

  pre > code {
    // 줄 바꿈
    white-space: pre-wrap;
    word-break: break-word;
  }
`
