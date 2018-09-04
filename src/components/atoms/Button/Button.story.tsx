import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from './Button';
import { CodeBlock } from '../../../storybook/CodeBlock';
import { H2 } from '../H2';

const stories = storiesOf('Forms/Button', module);

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  link: 'link'
};

stories.add('default', () => (
  <Fragment>
    <p>
      Responsible for triggering UI Interactions. Can be styled via the type
      prop.
    </p>
    <Flex>
      <Box width={1 / 2}>
        <CodeBlock mb={4}>
          {`
<Button
  label='Click Me'
  type="primary"
  onClick={() => console.log('hey')}
/>
`}
        </CodeBlock>
      </Box>
      <Box width={1 / 2} ml={10}>
        <Button
          label={text('label', 'Click me')}
          disabled={boolean('disabled', false)}
          type={select('type', buttonTypes, 'primary')}
          mb={4}
        />
      </Box>
    </Flex>

    <H2 mb={2}>Secondary</H2>
    <Button
      label={text('label', 'Click me')}
      disabled={boolean('disabled', false)}
      type="secondary"
      mb={4}
    />
    
    <H2 mb={2}>Tertiary</H2>
    <Button
      label={text('label', 'Click me')}
      disabled={boolean('disabled', false)}
      type="tertiary"
      mb={4}
    />
    
    <H2 mb={2}>Link</H2>
    <Button
      label={text('label', 'Click me')}
      disabled={boolean('disabled', false)}
      type="link"
      mb={4}
    />
  </Fragment>
));
