import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { CoverCardWithHoverContent } from './CoverCardWithHoverContent';

const stories = storiesOf('Presentational/Cards/CoverCardWithHoverContent', module)

stories.add('default', () => (
  <Box width={1/2}>
    <p>
      CoverCardWithHoverContent is just like the CoverCard, but it accepts children,<br />
      which will be display on hover.
    </p>
    <CoverCardWithHoverContent
      coverUrl={text('coverUrl', 'https://musicspot.com.au/media/wysiwyg/Drums.jpg')}
    >
      {text('children', 'Any Content can go here')}
    </CoverCardWithHoverContent>
  </Box>
))
