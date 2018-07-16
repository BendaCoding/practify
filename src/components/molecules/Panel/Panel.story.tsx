import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, number, boolean } from '@storybook/addon-knobs';
import { Panel } from './';
import { CodeBlock } from '../../../storybook/CodeBlock/index';

const stories = storiesOf('Presentational/Panel', module);

stories.add('default', () => (
  <Fragment>
    <p>
      General panel made for mobile Screens. onClick references the backdrop and should trigger panel deactivation.
    </p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{`<Panel active={isActive} onClick={deactivatePanel()}>
        Panel Content
</Panel>`}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
      Activate the Panel in Knobs 
        <Panel active={boolean('active',false, 'active')} onClick={() => boolean('active', false, 'active')}>
        Panel Content</Panel>
      </Box>
    </Flex>
  </Fragment>
));
