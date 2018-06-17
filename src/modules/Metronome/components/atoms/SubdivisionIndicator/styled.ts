import { styledWithProps } from 'practify/theme';

interface IProps {
  active?: boolean;
}

export const SubdivisionIndicator = styledWithProps<IProps>('li')`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  list-style: none;
  margin: 12px;
  transition: 75ms all ease-out;

  ${({ theme, active }) => active && `
    background: ${theme.colors.primary};
    transform: scale(1.7);
  `}
`;