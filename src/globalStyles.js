import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }

`;

export default GlobalStyle;