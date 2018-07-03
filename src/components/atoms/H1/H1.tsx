import { styled, space } from "practify/theme";

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  margin: 0;
  ${space}
  
  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
  }
  @media (min-width: ${({ theme: { breakpoint } }) => breakpoint.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    margin-bottom:3px;
  }
`;
