import * as React from "react";
import { Table, THead, TBody, Td, ProgressBar } from "practify/components";
import { withLoader } from "practify/hocs";
import {theme} from 'practify/theme';
import * as S from "./styled";
import { Card } from "../../molecules/ExerciseCard/styled";
import { IconBrowse } from "../../../layout/MainNav/styled";
import { FaEllipsisV }  from "react-icons/lib/fa";

interface IExerciseItem extends IExercise {
  active?: boolean;
}

interface IExercisesTableProps {
  exercises: IExerciseItem[];
  onExerciseClick?: (index: number) => void;
}

export const ExercisesTable: React.SFC<IExercisesTableProps> = ({
  exercises,
  onExerciseClick
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
                  <S.Options >  <FaEllipsisV color={theme.colors.secondary}/> </S.Options>
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
