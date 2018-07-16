import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { withInfo } from '@storybook/addon-info';
import { text, number, boolean } from '@storybook/addon-knobs';
import { ExerciseCard } from './';
import { CodeBlock } from '../../../storybook/CodeBlock/index';

const stories = storiesOf('Presentational/ExerciseCard', module);

stories.add('default', () => (
  <Fragment>
    <p>ExerciseCard, made for practice screen.</p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>{`<ExerciseCard 
        name='Exercise A'
        active={true}
        onClick ={()=> console.log('hey')}
        timeLeft='20s'
        finished={false}
        progress={30} 
/>`}</CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <ExerciseCard
          name={text('Name', 'Exercise A')}
          active={boolean('active', true)}
          timeLeft={text('timeLeft', '20s')}
          finished={boolean('finished', false)}
          progress={number('Progress', 30)}
        />
      </Box>
    </Flex>
  </Fragment>
));
