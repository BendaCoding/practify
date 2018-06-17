import { styled } from 'practify/theme';

export const Header = styled.header`
  display: flex;
  padding: 0 24px;
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.curiousBlue};

  h3 {
    line-height: 57px;
    margin: 0;
  }
`;