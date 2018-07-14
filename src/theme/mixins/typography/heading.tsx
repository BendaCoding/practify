import { css, space } from '../../styled';

type Heading = 1 | 2 | 3 | 4 | 5

export const heading = (nr: Heading) => css`
  font-weight: 200;
  font-size: ${({ theme }) => theme.fontSizes[`h${nr}`]};
  margin: 0;
  ${space}
`;
