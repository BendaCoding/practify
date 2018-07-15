import { styled, mixins, baseTheme } from 'practify/theme';

const { fontSizes: { h1, h2, h3, h4, h5 } } = baseTheme;

export const H2 = styled.h2`
  ${mixins.heading}
  ${mixins.fluidRange('font-size', h3, h2, 'sm', 'xl')}
`;
