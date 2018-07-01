import { styled } from 'practify/theme';

export const Header = styled.div`
  padding-bottom: ${({ theme}) => `${theme.space[1]}px`};
  border-bottom: ${({ theme }) => theme.borders.default};
  margin-bottom: ${({ theme}) => `${theme.space[2]}px`};
`;