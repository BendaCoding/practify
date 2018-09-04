import { styled, mixins, baseTheme } from 'practify/theme';
import { space } from 'styled-system';

const { fontSizes: { h1, h2, h3, h4, h5 } } = baseTheme;

export const H2 = styled.h2`
  ${space};
  ${mixins.heading};
  ${mixins.fluidRange('font-size', h3, h2, 'sm', 'xl')}
`;
