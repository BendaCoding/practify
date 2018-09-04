import React, { SFC } from 'react';
import { Exercise } from 'practify/store';
import { get } from 'lodash';
import { Card } from '../../../atoms';
import { ExerciseWithPlaylistData } from '../../../../store/practice/types/ExerciseWithPlaylistData';

interface SheetAndVideoProps {
  exercise: ExerciseWithPlaylistData;
}

export const SheetAndVideo: SFC<SheetAndVideoProps> = ({ exercise: { media } }) => (
  <div>
    {get(media, 'sheetUrl') && (
      <Card>
        <img src="/img/sheet.jpg" style={{ width: '100%' }} />
      </Card>
    )}
  </div>
)
