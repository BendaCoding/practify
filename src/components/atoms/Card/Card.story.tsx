import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { CodeBlock } from '../../../storybook/CodeBlock';

const stories = storiesOf('Presentational/Cards/Card', module);

stories.add('default', () => (
  <Fragment>
    <p>Simple Card to group related content.</p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{'<Card>Card Content</Card>'}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <Card>{text('children', 'Card Content')}</Card>
      </Box>
    </Flex>
  </Fragment>
));
