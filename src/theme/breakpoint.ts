import { css } from './styled';
import { drumTheme } from './theme';

export const breakpoint: any = {
  sm: css`@media (min-width: ${drumTheme.breakpoints[0]}px)`,
  md: css`@media (min-width: ${drumTheme.breakpoints[1]}px)`,
  lg: css`@media (min-width: ${drumTheme.breakpoints[2]}px)`,
  xl: css`@media (min-width: ${drumTheme.breakpoints[3]}px)`,
}
