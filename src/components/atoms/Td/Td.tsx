import { styled } from 'practify/theme';

export const Td = styled.td`
  display: table-cell;
  border-bottom: 1px solid ${({ theme}) => theme.colors.light};
  padding: 4px 0;
`;
