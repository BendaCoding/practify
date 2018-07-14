import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Box } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Presentational/Cards/Card', module)

stories.add('default', () => (
  <Box width={1/2}>
    <p>
      Simple Card to group related content.
    </p>
    <Card>
      {text('children', 'Card Content')}
    </Card>
  </Box>
))
