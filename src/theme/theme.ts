const palette = {
  curiousBlue:       '#3297CE',
  blackSqueeze:      '#F5F8FA',
  blackRussian:      '#212529',
  vulcan:            '#48515A',
  slateGrey:         '#717F8D',
  cadetGrey:         '#90A2B4',
  lightGrey:         '#AAAAAA',
  athensGrey:        '#DFDFDF',
  white:             '#FFFFFF',
}

export const theme: ITheme = {
  palette: { ...palette },
  colors: {
    primary: `${palette.curiousBlue}`,
    secondary: `${palette.slateGrey}`,
    disabled: `${palette.athensGrey}`,
    light: `${palette.slateGrey}`,

    bodyBackground: `${palette.blackSqueeze}`,
    overlayBackground: `${palette.slateGrey}47`,
    spinnerLight: palette.athensGrey,
    spinnerDark:  palette.cadetGrey,
  },
  fontSizes: {
    xxl:               '40px',
    h1:                '30px',
    h2:                '24px',
    h3:                '18px',
    h4:                '16px',
    body:              '13px',
    small:             '10px',
  },
  transitions: {
    easeOutElastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};
