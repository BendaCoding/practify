import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { CodeBlock } from '../../../storybook/CodeBlock';
import { Placeholder } from './Placeholder';

const stories = storiesOf('Presentational/Placeholder', module);

stories.add('default', () => (
  <Fragment>
    <p>A square Placeholder to signal that a card or similar component should go here</p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{'<Placeholder />'}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <Placeholder />
      </Box>
    </Flex>
  </Fragment>
));
