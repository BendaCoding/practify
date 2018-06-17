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
};
