import { injectGlobal } from 'practify/theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fade = `
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-exit {
    display: none;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`;

const rotate = `
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const baseStyles = () => injectGlobal`

  @font-face {
    font-family: 'YT Sans';
    font-style: normal;
    font-weight: 500;
    src: local('YTSans Medium'), local('YTSans-Medium'), url(https://fonts.gstatic.com/s/ytsans/v2/46kqlb3ta3zqoJU2dbvnb0Jg0ntbEZI.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  html body {
    width: 100%;
    min-height: 100vh;
    background: #F5F8FA;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', sans-serif;
    font-size: 16px;
  }

  #root {
    height: 100%;
  }

  .app {
    height: 100%;
  }

  ${fade}

  ${rotate}
`;
