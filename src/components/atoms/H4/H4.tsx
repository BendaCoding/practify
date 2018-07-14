import { styled, breakpoint, space } from 'practify/theme';

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  margin: 0;
  ${space}
  
  ${breakpoint.sm} {
    font-size: ${({ theme }) => theme.fontSizes.h4};
  }
`;
