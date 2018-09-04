import { styled, css } from 'practify/theme';
import { Card as BaseCard } from '../../atoms/Card';
import { OwnProps } from './ExerciseCard';
import { ProgressBar as BaseProgressBar } from '../../atoms/ProgressBar/styled';
import { Rank as BaseRank } from '../../atoms';

interface WrapperProps {
  active?: boolean;
}

export const Wrapper = styled<WrapperProps, any>(BaseCard)`
  cursor: pointer;
  position: relative;
  transition: 95ms color ease-in;

  ${({ theme, active }) => active
      ? `color: ${theme.colors.typo.primary};`
      : `
        color: ${theme.colors.typo.secondary};
        opacity: 0.68;
      `
    };
  &:hover {
    color: ${({ theme }) => theme.colors.typo.primary};
  }

  &:before {
    width: 0;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: 192ms width ${({ theme }) => theme.transitions.easeOutElastic};

    ${({ active }) => active && css`width: 3px;`}
  }
`;

type CardTitleProps = Pick<OwnProps, 'finished'>

export const CardTitle = styled<CardTitleProps, any>('h4')`
  font-size: ${props => props.theme.fontSizes.h4};
  ${({ finished }) => finished && 'text-decoration: line-through;'}
`;

export const Rank = BaseRank.extend`
  position: relative;
  top: -1px;
  margin-right: 5px;
`;

export const TimeLeft = styled.span`
  position: relative;
  top: 1px;
  font-size: ${props => props.theme.fontSizes.body};
`;
