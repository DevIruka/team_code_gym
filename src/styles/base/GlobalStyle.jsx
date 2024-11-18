import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --yellow: #e5b200;
        --orange: #eb9932;
        
        --white: #fff;
        --gray: #919191;
        --khaki: #697565;
        --background: #3C3D37;
        --header: #181C14;
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
