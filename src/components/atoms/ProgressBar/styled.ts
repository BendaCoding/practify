import { styled } from 'practify/theme';

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.light};
`;

export const Filled = styled.div`
  transition: 250ms width;
  height: 6px;
  background: ${props => props.theme.colors.primary};
`;
