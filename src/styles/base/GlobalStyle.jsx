import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --yellow: #e5b200;
        --background: #3C3D37;
        --orange: #eb9932;
        --gray: #919191;
        --khaki: #697565;
    }
    @font-face {
        font-family: "Helchang";
        src: url("/fonts/Helchang.ttf") format("truetype");
    }
    body {
        width: 100%;
        background-color: var(--background);
        font-family: "Helchang";
        font-size: 20px;
        color: white
    }
`

export default GlobalStyle
