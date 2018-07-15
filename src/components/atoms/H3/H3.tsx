import { styled, mixins, baseTheme } from 'practify/theme';

const { fontSizes: { h1, h2, h3, h4, h5 } } = baseTheme;

export const H3 = styled.h3`
  ${mixins.heading}
  ${mixins.fluidRange('font-size', h4, h3, 'sm', 'xl')}
`;
