/**
 * Main Color palette
 */
const palette = {
  curiousBlue:       '#3297CE',
  aeroBlue:          '#7CB9E8',
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
  confetti:          '#EFE255',
  white:             '#FFFFFF',
  black:             '#000000',
}

/**
 * This palette is meant for info graphics, tags and other contract giving elements
 */
const infoPalette = {
  color1:            '#65C45D',
  color2:            '#C45D8A',
  color3:            '#7C5DC4',
  color4:            '#CD594D',
  color5:            '#EFE255',
}

/**
 * Main Practify theme for drums
 */
export const baseTheme: ITheme = {
  breakpoints: [576, 768, 992, 1200],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  
  palette:              { ...palette },
  infoPalette:          { ...infoPalette },

  colors: {
    primary:            palette.curiousBlue,
    secondary:          palette.slateGrey,
    disabled:           palette.athensGrey,
    dimmed:             palette.slateGrey,
    light:              palette.athensGrey,
    background:         palette.blackSqueeze,
    success:            palette.limeade,
    error:              palette.firebush,
    info:               palette.confetti,

    typo: {
      primary:          palette.blackRussian,
      secondary:        palette.slateGrey,
      inverted:         palette.gallery,
      contrast:         palette.white,
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

    button: {
      primary:          palette.curiousBlue,
      hover:            palette.aeroBlue,
      active:           palette.navyBlue,
      disabled:         palette.slateGrey,
    },
    
    countIn: {
      overlay:        `${palette.slateGrey}47`,
    },

    overlayBg: `${palette.slateGrey}47`,

    spinner: {
      light:           palette.athensGrey,
      dark:            palette.cadetGrey,
    },
  },
  fontSizes: {
    xxl:               '40px',
    h1:                '36px',
    h2:                '24px',
    h3:                '22px',
    h4:                '18px',
    h5:                '16px',
    body:              '16px',
    small:             '13px',
    tiny:              '11px',
  },
  transitions: {
    easeOutElastic:    'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    gradualEaseInOut:  'cubic-bezier(.54,.24,.44,.78)',
  },
  shadows: {
    regular:           `1px 1px 3px ${palette.athensGrey}`,
  },
  borders: {
    default:           `1px solid ${palette.athensGrey}`,
    borderRadius:      '2px',
  },
  components: {
    coverCardWithHoverContent: {
      overlayBg:         `${palette.black}76`,
      transition:      '90ms opacity ease-in',
    },
  },
};
