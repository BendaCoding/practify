import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'grid-styled';
import { H1 } from './H1';
import { H2 } from '../H2';
import { H3 } from '../H3';
import { H4 } from '../H4';
import { H5 } from '../H5';

const stories = storiesOf('Typography', module)

stories.add('H1 - H5', () => (
  <Box>
    <H1 mb={4}>The quick brown fox jumped over the lazy dog.</H1>
    <H2 mb={4}>The quick brown fox jumped over the lazy dog.</H2>
    <H3 mb={4}>The quick brown fox jumped over the lazy dog.</H3>
    <H4 mb={4}>The quick brown fox jumped over the lazy dog.</H4>
    <H5 mb={4}>The quick brown fox jumped over the lazy dog.</H5>
  </Box>
))
