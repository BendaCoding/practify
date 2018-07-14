import { styled } from 'practify/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 5px;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => theme.borders.default};
`;
