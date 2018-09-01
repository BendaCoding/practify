import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, number, boolean } from '@storybook/addon-knobs';
import { CodeBlock } from '../../../storybook/CodeBlock/index';
import { RatingStars } from './';

const stories = storiesOf('Presentational/RatingStars', module);

stories.add('default', () => (
  <Fragment>
    <p>
      Display a rating with stars. You can provide the maximum prop to change
      the max rating.
    </p>
    <p>Floating numbers are rounded down to the next .5 decimal point.</p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{'<RatingStars rating={3} />'}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <RatingStars rating={3} />
      </Box>
    </Flex>
  </Fragment>
));
