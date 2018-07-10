import { styled } from 'practify/theme';

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.light};
`;

interface IFilledProps {
  noTransition?: boolean;
}

export const Filled = styled<IFilledProps, any>('div')`
  height: 6px;
  background: ${props => props.theme.colors.primary};
  transition: 1000ms width;
  ${({ noTransition }) => noTransition && 'transition: none;'}
`;
