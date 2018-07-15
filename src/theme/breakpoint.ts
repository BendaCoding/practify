import { css } from './styled';
import { baseTheme } from './theme';
import { InterpolationValue } from 'styled-components';

export const breakpointNames: string[] = ['sm', 'md', 'lg', 'xl'];
interface IBreakpoints {
  sm: InterpolationValue[];
  md: InterpolationValue[];
  lg: InterpolationValue[];
  xl: InterpolationValue[];
}

export const breakpoint: IBreakpoints = {
  sm: css`@media (min-width: ${baseTheme.breakpoints[0]}px)`,
  md: css`@media (min-width: ${baseTheme.breakpoints[1]}px)`,
  lg: css`@media (min-width: ${baseTheme.breakpoints[2]}px)`,
  xl: css`@media (min-width: ${baseTheme.breakpoints[3]}px)`,
}

export const getBreakpointByName = (name: string, asNumber: boolean = false) => {
  const map = { sm: 0, md: 1, lg: 2, xl: 3 };
  return asNumber ? baseTheme.breakpoints[map[name]] : `${baseTheme.breakpoints[map[name]]}px`;
}
