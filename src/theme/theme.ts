/**
 * Main Color palette
 */
const palette = {
  curiousBlue:       '#3297CE',
  navyBlue:          '#135EDA',
  limeade:           '#63A12C',
  milanoRed:         '#A13530',
  blackSqueeze:      '#F5F8FA',
  blackRussian:      '#212529',
  vulcan:            '#48515A',
  slateGrey:         '#717F8D',
  cadetGrey:         '#90A2B4',
  cornFlower:        '#95C9E6',
  lightGrey:         '#AAAAAA',
  athensGrey:        '#DFDFDF',
  gallery:           '#EFEFEF',
  firebush:          '#DE9D49',
  white:             '#FFF',
  black:             '#000',
}

/**
 * This palette is meant for info graphics, tags and other contract giving elements
 */
const infoPalette = {
  color1:            '#65C45D',
  color2:            '#C45D8A',
  color3:            '#7C5DC4',
  color4:            '#CD594D',
  color5:            '#E5DA60',
}

/**
 * Main Practify theme for drums
 */
export const theme: ITheme = {
  
  palette:              { ...palette },
  infoPalette:          { ...infoPalette },

  colors: {
    primary:            palette.curiousBlue,
    secondary:          palette.slateGrey,
    disabled:           palette.athensGrey,
    dimmed:             palette.slateGrey,
    light:              palette.athensGrey,
    background:         palette.blackSqueeze,

    typo: {
      primary:          palette.blackRussian,
      secondary:        palette.slateGrey,
      inverted:         palette.gallery,
      highlight:        palette.curiousBlue,
    },

    mainNav: {
      link:             palette.cornFlower,
      linkHover:        palette.gallery,
      linkActive:       palette.gallery,
    },

    table: {
      hoverBackground: `${palette.lightGrey}22`,
    },
    
    countIn: {
      overlay:        `${palette.slateGrey}47`,
    },

    overlayBackground: `${palette.slateGrey}47`,

    spinner: {
      light:           palette.athensGrey,
      dark:            palette.cadetGrey,
    },
  },
  fontSizes: {
    xxl:               '40px',
    h1:                '30px',
    h2:                '24px',
    h3:                '18px',
    h4:                '16px',
    body:              '13px',
    small:             '11px',
  },
  transitions: {
    easeOutElastic:    'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  breakpoint: {
    xs:                '0px',
    sm:                '576px',
    md:                '768px',
    lg:                '992px',
    xl:                '1200px',
  },
  shadows: {
    regular:           `0px 2px 4px ${palette.athensGrey}`,
  },
  borders: {
    default:           `1px solid ${palette.athensGrey}`,
    borderRadius:      '2px',
  },
  space: [0, 6, 12, 24, 36, 48, 96, 192, 384]
};
