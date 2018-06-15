import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

const styledWithProps = <P>(tag: keyof JSX.IntrinsicElements) =>
  styled[tag] as styledComponents.ThemedStyledFunction<P, ITheme, P & JSX.IntrinsicElements[typeof tag]>;

export { css, injectGlobal, keyframes, ThemeProvider, styled, styledWithProps };
