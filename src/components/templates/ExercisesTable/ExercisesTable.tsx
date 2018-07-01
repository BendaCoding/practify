import * as React from 'react';
import { Table, THead, TBody, Td } from 'practify/components';
import { withLoader } from 'practify/hocs';
import * as S from './styled';

interface IExerciseItem extends IExercise {
  active?: boolean;
}

interface IExercisesTableProps {
  exercises: IExerciseItem[];
  onExerciseClick?: (index: number) => void;
}

export const ExercisesTable: React.SFC<IExercisesTableProps> = ({ exercises, onExerciseClick }) => {
  const onItemClick = onExerciseClick
    ? (index: number) => () => onExerciseClick(index)
    : (index: number) => null;

  return (
    <div>
      <Table>
        <TBody>
          {
            exercises.map((exercise, index) => (
            <S.Tr key={exercise.id} onClick={onItemClick(index)} active={exercise.active}>
              <Td>{exercise.name}</Td>
            </S.Tr>
          ))
          }
        </TBody>
      </Table>
    </div>
  );
}

ExercisesTable.defaultProps = {
  exercises: [],
}
