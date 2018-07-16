import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, number, boolean } from '@storybook/addon-knobs';
import { CircularProgressBar } from './';
import { CodeBlock } from '../../../storybook/CodeBlock/index';
import { baseTheme } from 'practify/theme';

const stories = storiesOf(
  'Presentational/ProgressBar/CircularProgressBar',
  module
);

stories.add('CircularProgressBar', () => (
  <Fragment>
    <p>
      CircularProgressBar used in the Timer.
    </p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{`<CircularProgressBar   
        progress={100}
        text='0:20'
        size={40}
        strokeWidth={2}
        isRunning={true}
        finished={false}
        onClick={() => null} 
/>`}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <CircularProgressBar
          progress={number('Progress', 100)}
          text={text('Text', '0:20')}
          size={number('Size', 40)}
          strokeWidth={number('strokeWidth', 2)}
          isRunning={boolean('isRunning', true)}
          finished={boolean('finished', false)}
          onClick={() => null}
        />
      </Box>
    </Flex>
  </Fragment>
));
