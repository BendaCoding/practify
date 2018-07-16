import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { CoverCard } from './CoverCard';
import { CodeBlock } from '../../../storybook/CodeBlock/index';

const stories = storiesOf('Presentational/Cards/CoverCard', module)

stories.add('default', () => (
<Fragment>
    <p>
      CoverCard extends the regular Card and preserves a square ratio.<br />
      It takes in a coverUrl to display as a background image.
    </p>
  <Flex>
  <Box width={1 / 2}>
    <CodeBlock mb={4}>{`<Card>Card Content</Card>`}</CodeBlock>
  </Box>
  <Box width={1 / 2} ml={10}>
    <CoverCard
      coverUrl={text('coverUrl', 'https://musicspot.com.au/media/wysiwyg/Drums.jpg')}
      title={text('title', 'Title')}
      description={text('description', 'Description')}
    />
    </Box>
  </Flex>
  </Fragment>
))
