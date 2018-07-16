import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import * as Icon from './';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, color, array } from '@storybook/addon-knobs';
import { CodeBlock } from '../../../storybook/CodeBlock';
import { IconAcoustic } from './';
import { object } from '../../../../node_modules/@types/prop-types';

const stories = storiesOf('Presentational/Icons', module);


stories.add('default', () => (
  <Fragment>
    <p>
      Icon Library specific to Practify. Constains musical and special Icons.
    </p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock
          mb={4}
        >{` <IconAcoustic 
        size='40%' 
        color='#3333ff' 
        transitiion={} 
        className=''
        />`}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <Icon.IconAcoustic
          size={text('size', '40%')}
          color={color('Color', '#3333ff')}
        />
      </Box>
    </Flex>
  </Fragment>
));
