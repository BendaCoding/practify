import { injectGlobal, css } from "practify/theme";


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

  .flickity-prev-next-button {
    width: 24px;
    height: 24px;
    top: 0;
    transform: translateY(-39px);
    background: none;

    &:hover {
      background: none;
    }
    
    &.next {
      right: 19px;
    }

    &.previous {
      left: auto;
      right: 44px;
    }
  }
  
`;