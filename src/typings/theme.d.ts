declare interface ITheme {
  palette: {
    curiousBlue: string;
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
    
    typo: {
      primary: string;
      secondary: string;
      inverted: string;
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


    countIn: {
      overlay: string;
    }
    overlayBackground: string;

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
    body: string;
    small: string;
  }
  transitions: {
    easeOutElastic: string;
  }
  breakpoint: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
  shadows: {
    regular: string;
  }
  borders: {
    default: string;
    borderRadius: string;
  }
  space: number[];
}