import { styled } from 'practify/theme';

export const Tr = styled.tr`
  display: table-row;
  cursor: pointer;
  
  &:hover td {
    background: ${({ theme }) => theme.colors.table.hoverBackground};
  }
`;
