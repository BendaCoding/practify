import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, number, color, select } from '@storybook/addon-knobs';
import { Tag } from './';
import { CodeBlock } from '../../../storybook/CodeBlock/index';
import { baseTheme } from 'practify/theme';

const stories = storiesOf('Presentational/Tag', module);

stories.add('default', () => (
  <Fragment>
    <p>
      Tags used to mark Insturments, Genres, Types etc. Color is an Element of the Infopalette.
    </p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{" <Tag color='color1' label='TagText' />"}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <Tag color={select('Color', baseTheme.infoPalette , 'color1')} label={text('Label','TagText')} />
      </Box>
    </Flex>
  </Fragment>
));
