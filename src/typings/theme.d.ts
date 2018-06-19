declare interface ITheme {
  palette: {
    curiousBlue: string;
    blackSqueeze: string;
    athensGrey: string;
    blackRussian: string;
    vulcan: string;
    slateGrey: string;
    cadetGrey: string;
    lightGrey: string;
    white: string;
  };
  colors: {
    primary: string;
    secondary: string;
    disabled: string;
    light: string;
    
    bodyBackground: string;
    overlayBackground: string;
    spinnerLight: string;
    spinnerDark: string;
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
}