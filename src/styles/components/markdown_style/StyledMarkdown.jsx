import styled from 'styled-components'

const StyledMarkdown = styled.div`
  font-family: 'Fira Code', monospace;
  line-height: 1.5;

  pre {
    background-color: white;
    padding: 10px;
  }

  pre > code {
    text-overflow: hidden;
    max-height: calc(1.5em * 5);

    padding: 0;
    margin: 0;
    display: -webkit-box;
    /* 우선 5줄로 제한 */
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* ... */

    // 줄 바꿈
    white-space: pre-wrap;
    word-break: break-all;
  }
`

export default StyledMarkdown

// TODO: 코드 overflow 되었을때 처리 (... 추가하는 것)