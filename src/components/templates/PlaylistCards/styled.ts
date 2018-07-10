import { styled } from 'practify/theme';
import { ExerciseCard as BaseExerciseCard } from '../../molecules/ExerciseCard';

interface IExerciseCardProps {
  active: boolean;
}

export const ExerciseCard = styled<IExerciseCardProps, any>(BaseExerciseCard)`

`;
