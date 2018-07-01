import { styled } from 'practify/theme';
import { Tr as BaseTr } from 'practify/components';

interface ITrProps {
  active: boolean;
}

export const Tr = styled<ITrProps, any>(BaseTr)`
  ${({ theme, active }) => active && `color: ${theme.colors.typo.highlight};`}
`;