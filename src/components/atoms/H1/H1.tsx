import { breakpoint, styled, space } from 'practify/theme';

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin: 0;
  ${space}
  
  ${breakpoint.sm} {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
  ${breakpoint.md} {
    font-size: ${({ theme }) => theme.fontSizes.h1};
  }
`;
