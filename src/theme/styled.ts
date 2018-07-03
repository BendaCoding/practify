import * as styledComponents from "styled-components";
import { space, width, fontSize, color } from "styled-system";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  styled,
  space,
  width,
  fontSize,
  color,
};
