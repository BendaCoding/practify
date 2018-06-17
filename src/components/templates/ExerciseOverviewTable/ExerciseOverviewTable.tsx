import * as React from 'react';
import { Table, THead, TBody } from 'practify/components';

interface IExerciseOverviewTableProps {
  exercises: IExercise[];
}

export const ExerciseOverviewTable: React.SFC<IExerciseOverviewTableProps> = ({ exercises }) => (
  <div>
    <h1>Overview</h1>
    <Table>
      
    </Table>
  </div>
);