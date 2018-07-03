import { styled } from 'practify/theme';
import { ExerciseCard as BaseExerciseCard } from './../../molecules/ExerciseCard';

interface IExerciseCardProps {
  active: boolean;
}

export const ExerciseCard = styled<IExerciseCardProps, any>(BaseExerciseCard)`
  transform: translateX(30%);
  transition: 350ms transform ${({ theme }) => theme.transitions.easeOutElastic};

  ${({ active }) => active && `transform: translateX(0);`}
`;