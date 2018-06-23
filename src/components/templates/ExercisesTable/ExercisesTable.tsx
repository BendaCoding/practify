import * as React from 'react';
import { Table, THead, TBody, Tr, Td } from 'practify/components';
import { withLoader } from 'practify/hocs';

interface IExercisesTableProps {
  exercises: IExercise[];
}

export const ExercisesTable: React.SFC<IExercisesTableProps> = ({ exercises }) => {
  return (
  <div>
    <Table>
      <TBody>
        {
          Object.keys(exercises).map(exerciseId => ( // TODO: define normalized format for firebase obj vs array
          <Tr key={exerciseId}>
            <Td>{exercises[exerciseId].name}</Td>
          </Tr>
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
