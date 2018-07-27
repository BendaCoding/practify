import { css } from 'practify/theme';
import { getBreakpointByName, breakpointNames } from './../breakpoint';
import { between } from './between';

type BreakpointName = 'sm' | 'md' | 'lg' | 'xl';

export const fluidRange = (
  property: string,
  minValue: string,
  maxValue: string,
  minWidth: string | BreakpointName = getBreakpointByName('sm') as string,
  maxWidth: string | BreakpointName = getBreakpointByName('xl') as string,
) => {
  if (breakpointNames.indexOf(minWidth) !== -1) {
    minWidth = getBreakpointByName(minWidth) as string;
  }
  if (breakpointNames.indexOf(maxWidth) !== -1) {
    maxWidth = getBreakpointByName(maxWidth) as string;
  }

  return css`
    ${property}: ${minValue};
    @media (min-width: ${minWidth}) {
      ${property}: ${between(
          minValue,
          maxValue,
          minWidth,
          maxWidth,
        )};
    }
    @media (min-width: ${maxWidth}) {
      ${property}: ${maxValue};
    }
  `;
}
