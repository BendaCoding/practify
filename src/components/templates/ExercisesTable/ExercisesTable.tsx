import React from 'react';
import { Table, TBody, Td, ProgressBar } from 'practify/components';
import * as S from './styled';
import { FaEllipsisV }  from 'react-icons/lib/fa';
import { withTheme, ThemeProps } from 'styled-components';
import { Exercise } from 'practify/store';

interface ExerciseItem extends Exercise {
  active?: boolean;
}

interface ExercisesTableProps extends ThemeProps<ThemeInterface> {
  exercises: ExerciseItem[];
  onExerciseClick?: (index: number) => void;
}

export const ExercisesTable: React.SFC<ExercisesTableProps> = ({
  exercises,
  onExerciseClick,
  theme,
}) => {
  const onItemClick = onExerciseClick
    ? (index: number) => () => onExerciseClick(index)
    : (index: number) => null;

  return (
    <div>
      <Table>
        <TBody>
          {exercises.map((exercise, index) => (
            <S.Tr
              key={exercise.id}
              onClick={onItemClick(index)}
              active={exercise.active}
            >
              <Td>
                <S.Exercise>
                  <S.Name>{exercise.name}</S.Name>
                  
                  
                  <S.Progress><ProgressBar progress={Math.random()*100}/></S.Progress>
                  <S.Options><FaEllipsisV color={theme.colors.secondary}/></S.Options>
                  <S.Description><S.Info>0:50min</S.Info><S.Bullet>&bull;</S.Bullet>{exercise.description}</S.Description>
                </S.Exercise>
              </Td>
            </S.Tr>
          ))}
        </TBody>
      </Table>
    </div>
  );
};

ExercisesTable.defaultProps = {
  exercises: []
};

export default withTheme(ExercisesTable);

