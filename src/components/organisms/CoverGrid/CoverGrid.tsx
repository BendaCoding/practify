import React, { SFC } from 'react';
import { CoverCardWithLabel } from 'practify/components';
import { H4, H3 } from '../../atoms';
import { Box, Flex } from 'grid-styled';
import * as S from './styled';
import * as Icon from '../../atoms/Icon';
import { times } from 'lodash';
import { withTheme, ThemeProps } from 'styled-components';

interface CoverGridItem {
  coverUrl: string;
  name: string;
  description: string;
}

interface CoverGridProps extends ThemeProps<ThemeInterface> {
  items: CoverGridItem[];
  title?: string;
}

const icons = [
  'VinylRecord',
  'Violin',
  'Note',
  'TrebleClef',
  'Taperecorder',
  'Trumpet',
  'Accordion',
  'Trombone',
  'Vibraphone',
  'Triangle',
  'Pick',
  'Daburka',
  'Harp',
  'Maracas',
  'Flute'
];


export const CoverGrid: SFC<CoverGridProps> = ({
  title = '',
  items,
  theme,
}) => (
  <Box mb={2}>
    <S.Header>
      <H3>{title}</H3>
    </S.Header>
    <S.Grid>
      {times(3, (iteration: number) =>
        items.map((item: any, i: number) => {
          const InstrumentIcon = Icon['Icon' + icons[i * (iteration + 1)]];
          return (
            <Box key={item.name} width={1}>
              <Box mx={1}>
                <CoverCardWithLabel backdrop coverUrl={item.coverUrl} mb={2} >
              <S.Wrapper>
                {<InstrumentIcon size="50%" color={theme.colors.typo.primary}/>}
                <div>{item.name}</div>
                </S.Wrapper>
              </CoverCardWithLabel>

              </Box>
            </Box>
          );
        })
      )}
    </S.Grid>
  </Box>
);

export default withTheme(CoverGrid);

