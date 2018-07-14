import { styled, space } from 'practify/theme';

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  margin: 0;
  color: ${({ theme }) => theme.colors.typo.primary};
  ${space}

  ${({ theme, secondary }) => secondary && `color: ${theme.color.typo.secondary};`}
  ${({ theme, tertiary }) => tertiary && `color: ${theme.color.typo.tertiary};`}
`;
