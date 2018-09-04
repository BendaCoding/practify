import React, { SFC } from 'react';
import { get } from 'lodash';
import { Card } from '../../../atoms';
import { ExerciseWithPlaylistData } from '../../../../store/practice/types/ExerciseWithPlaylistData';
import Youtube from 'react-youtube';
import * as S from './styled';

interface SheetAndVideoProps {
  exercise: ExerciseWithPlaylistData;
}

export const SheetAndVideo: SFC<SheetAndVideoProps> = ({
  exercise: { media }
}) => (
  <div>
    {get(media, 'sheetUrl') && (
      <Card>
        <img src="/img/sheet.jpg" style={{ width: '100%' }} />
      </Card>
    )}

    {get(media, 'youtubeId') && (
      <S.YoutubeWrapper>
        <S.VideoWrapper>
          <Youtube
            videoId={media!.youtubeId}
            opts={{
              width: '100%',
              playerVars: {
                start: media!.youtubeStartAt || 0
              }
            }}
          />
        </S.VideoWrapper>
      </S.YoutubeWrapper>
    )}
  </div>
);
