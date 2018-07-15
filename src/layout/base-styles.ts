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
