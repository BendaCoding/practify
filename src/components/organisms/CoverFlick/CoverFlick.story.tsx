import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { boolean, select, text } from '@storybook/addon-knobs';
import { CodeBlock } from '../../../storybook/CodeBlock';
import { CoverFlick } from './CoverFlick';

const stories = storiesOf('Presentational/CoverFlick', module);

const playlists = [
  {
    id: 'v90FHKJDkyDJE9A2BpzQ',
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2Fv90FHKJDkyDJE9A2BpzQ%2Fcover.jpg?alt=media&token=5d54d1ca-1ff4-4e68-a73d-1b9f52ce024b',
    description: 'blues away',
    name: "Frank's Sunday Blues"
  },
  {
    id: 'Ze7DnCjEij9wBAV7Oisb',
    coverUrl:
    'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2FZe7DnCjEij9wBAV7Oisb%2Fcover.jpg?alt=media&token=2393921b-27b1-4f87-900a-7de0df198ab6',
    description: 'tick tick',
    name: 'Mechhead Rudiments'
  },
  {
    id: 'YTTyp9B05det6VWulM0l',
    coverUrl:
    'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2FYTTyp9B05det6VWulM0l%2Fcover.jpg?alt=media&token=ecca62c5-808e-4f45-83c9-d2d3826f019f',
    description: 'improve your handspeed',
    name: 'Ambitious Handspeed'
  },
  {
    id: 'X5oIvIVPUGdPwUe10Bfx',
    coverUrl:
    'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2FX5oIvIVPUGdPwUe10Bfx%2Fcover.jpg?alt=media&token=c0c8fd70-fd2e-41dc-8cd7-abf517ff129d',
    description: 'rudi away',
    name: 'Rudis Rudiments'
  },
  {
    id: 'OU7V21yXlkNoQU4PbH1f',
    coverUrl:
    'https://firebasestorage.googleapis.com/v0/b/practify-b68c5.appspot.com/o/images%2Fplaylists%2FOU7V21yXlkNoQU4PbH1f%2Fcover.jpg?alt=media&token=58da00d1-9018-4ba6-99d8-91512dfd7697',
    description: 'Groovy Patterns for a medium tempo',
    name: '96 BPM Grooves'
  }
];

stories.add('default', () => (
  <Fragment>
    <p>
      Displays a carousel of CoverCards in a row. Can be used to display
      Playlists, Exercises or similar.
    </p>

    <CoverFlick
      title="Recently Practiced"
      items={playlists}
      mb={4}
    />

    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>
          {`
const playlists = [
  {
    name: "Frank's Sunday Blues"
    description: "blues away",
    id: "v90FHKJDkyDJE9A2BpzQ",
    coverUrl: "image.jpg",
  },
  {
    name: "Mechhead Rudiments"
    description: "tick tick",
    id: "Ze7DnCjEij9wBAV7Oisb",
    coverUrl: "image.jpg",
  },
];

<CoverFlick
  title="Recently Practiced"
  items={playlists}
  onClick={onPlaylistClick}
  mb={4}
/>`}
        </CodeBlock>
      </Box>
    </Flex>
  </Fragment>
));
