import { breakpoint, styled, space } from 'practify/theme';

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  margin: 0;
  ${space}

  ${breakpoint.sm} {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
  ${breakpoint.md} {
    font-size: ${({ theme }) => theme.fontSizes.h2};
    
  }
`;
