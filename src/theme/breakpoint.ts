import { SimpleInterpolation } from "styled-components";
import { css } from './styled';

interface IBreakpoints<T = string> {
  sm: T;
  md: T;
  lg: T;
  xl: T;
}

const breakpoints: IBreakpoints = {
  sm: '567px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

type BreakpointFunction = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => ReturnType<typeof css> | any;

const wrapStylesInBreakpoint = (value: string): BreakpointFunction => (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${value}) {
    ${css(strings, ...interpolations)};
  }
`;

type ScopedBreakpointFunctions = IBreakpoints<BreakpointFunction>;

export const breakpoint: ScopedBreakpointFunctions = Object.keys(breakpoints)
  .reduce((accumulator, key: string) => {
    accumulator[key] = wrapStylesInBreakpoint(breakpoints[key]);
    return accumulator;
  },
  {} as any,
);
