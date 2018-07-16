import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, number } from '@storybook/addon-knobs';
import { ProgressBar } from './';
import { CodeBlock } from '../../../storybook/CodeBlock/index';

const stories = storiesOf('Presentational/ProgressBar', module);

stories.add('default', () => (
  <Fragment>
    <p>
      Simple ProgressBar to indicate Progress.
    </p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{`<ProgressBar
   progress={30}
   onClick={ () => console.log('hey')}
    />`}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <ProgressBar progress={number('Progress', 30)} />
      </Box>
    </Flex>
  </Fragment>
));
