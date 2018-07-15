import { styled, mixins, baseTheme } from 'practify/theme';

const { fontSizes: { h1, h2, h3, h4, h5 } } = baseTheme;

export const H1 = styled.h1`
  ${mixins.heading}
  ${mixins.fluidRange('font-size', h2, h1, 'sm', 'xl')}
`;
