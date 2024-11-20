import styled from 'styled-components'

export const StFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: var(--header);
  padding: 5px 10px;
  gap: 8px;

  .github-icon {
    font-size: 30px;
  }

  a {
    color: var(--white);
    text-decoration: none;
    font-size: 22px;

    &:hover {
      text-decoration: underline;
    }
  }
`
