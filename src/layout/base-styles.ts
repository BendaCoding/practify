import { injectGlobal } from "practify/theme";


export const baseStyles = () => injectGlobal`
html body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #F5F8FA;
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