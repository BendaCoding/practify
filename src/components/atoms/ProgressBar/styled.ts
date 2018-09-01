import { styled } from 'practify/theme';

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.light};
`;

interface FilledProps {
  noTransition?: boolean;
}

export const Filled = styled<FilledProps, any>('div')`
  height: 6px;
  background: ${props => props.theme.colors.primary};
  transition: 1000ms width;
  ${({ noTransition }) => noTransition && 'transition: none;'}
`;
