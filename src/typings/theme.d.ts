declare interface Theme {
  breakpoints: number[];
  space: number[];
  palette: {
    curiousBlue: string;
    aeroBlue:string;
    navyBlue: string;
    limeade: string;
    milanoRed: string;
    blackSqueeze: string;
    athensGrey: string;
    blackRussian: string;
    vulcan: string;
    slateGrey: string;
    cadetGrey: string;
    cornFlower: string;
    lightGrey: string;
    gallery: string;
    firebush: string;
    confetti: string;
    white: string;
    black: string;
  };
  infoPalette: {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
  }
  colors: {
    primary: string;
    secondary: string;
    disabled: string;
    dimmed: string;
    light: string;
    background: string;
    success: string;
    error: string;
    info: string;
    
    typo: {
      primary: string;
      secondary: string;
      inverted: string;
      contrast: string;
      highlight: string;
    }

    mainNav: {
      link: string;
      linkHover: string;
      linkActive: string;
    }

    table: {
      hoverBackground: string;
    }

    button: {
      primary:string;
      active:string;
      hover:string;
      disabled:string;
    }

    countIn: {
      overlay: string;
    }
    overlayBg: string;

    spinner: {
      light: string;
      dark: string;
    }
  }
  fontSizes: {
    xxl: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    body: string;
    small: string;
    tiny: string;
  }
  transitions: {
    easeOutElastic: string;
    gradualEaseInOut: string;
  }
  shadows: {
    regular: string;
  }
  borders: {
    default: string;
    borderRadius: string;
  }
  components: {
    coverCardWithHoverContent: {
      overlayBg: string;
      transition: string;
    }
  }
}