import { styled, mixins, baseTheme } from 'practify/theme';

const { fontSizes: { h1, h2, h3, h4, h5, body } } = baseTheme;

export const H5 = styled.h5`
  ${mixins.heading}
  ${mixins.fluidRange('font-size', body, h5, 'sm', 'xl')}
`;
