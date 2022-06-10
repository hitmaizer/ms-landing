import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { mediaQueries } from './theme';
import theme from 'src/styles/theme';

interface globalStyleProps {
  open?: boolean;
}

const GlobalStyle = createGlobalStyle<globalStyleProps>`
  ${reset}
  
  html {
    height: 100%;
    /* Adjust font size */
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on,
      contextual common-ligatures, 'kern', contextual common-ligatures, 'kern';
    -webkit-font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on;
    font-variant-ligatures: contextual common-ligatures;
    -webkit-font-kerning: normal;
    font-kerning: normal;
  }
  
  * {
    box-sizing: border-box;
    
  }
  
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Space Grotesk", sans-serif;
      scroll-behavior: smooth;
      ${mediaQueries.lg} {
        overflow: hidden;
      }
    }
  }
  
  a,
  button {
      cursor: pointer;
      border: none;
  }
  
  a, a:visited {
      text-decoration: none;   
      color: inherit;
  }
  body {
    overflow-x: hidden;
    background-color: ${theme.colors.purpleBg};
    width: 100vw;
    height: 100vh;
    
    // hide scrollbar 
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
    }
    
    ${({ open }) =>
      open === true &&
      css`
        // position: fixed;
      `}
  }
  
`;

export default GlobalStyle;
