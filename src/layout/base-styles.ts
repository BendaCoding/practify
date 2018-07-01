import { injectGlobal, css } from "practify/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const baseStyles = () => injectGlobal`

  html body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica', sans-serif;
    background: #F5F8FA;
    height:100vh;
    width:100%;
  }

  #root{
    height:100%;
  }

  .app{
    height:100%;
  }
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


  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
`;