import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { CoverCard } from './CoverCard';

const stories = storiesOf('Presentational/Cards/CoverCard', module)

stories.add('default', () => (
  <Box width={1/2}>
    <p>
      CoverCard extends the regular Card and preserves a square ratio.<br />
      It takes in a coverUrl to display as a background image.
    </p>
    <CoverCard
      coverUrl={text('coverUrl', 'https://musicspot.com.au/media/wysiwyg/Drums.jpg')}
    />
  </Box>
))
