import { styled, mixins, baseTheme } from 'practify/theme';
import { space } from 'styled-system';

const { fontSizes: { h1, h2, h3, h4, h5, body } } = baseTheme;

export const H5 = styled.h5`
  ${space}
  ${mixins.heading}
  ${mixins.fluidRange('font-size', body, h5, 'sm', 'xl')}
`;
