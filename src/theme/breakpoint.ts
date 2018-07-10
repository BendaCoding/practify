import { SimpleInterpolation } from 'styled-components';
import { css } from './styled';
import { theme } from './theme';

export const breakpoint: any = {
  sm: css`@media (min-width: ${theme.breakpoints[0]}px)`,
  md: css`@media (min-width: ${theme.breakpoints[1]}px)`,
  lg: css`@media (min-width: ${theme.breakpoints[2]}px)`,
  xl: css`@media (min-width: ${theme.breakpoints[3]}px)`,
}
