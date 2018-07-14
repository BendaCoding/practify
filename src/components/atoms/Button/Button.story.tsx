import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Flex } from 'grid-styled';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from './Button';
import { CodeBlock } from '../../../storybook/CodeBlock';

const stories = storiesOf('Forms/Button', module)

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  link: 'link',
}

stories.add('default', () => (
  <Fragment>
<Box width={1/2}>
<p>
  Responsible for triggering UI Interactions. Can be styled via the type prop.
</p>

<Button
  label={text('label', 'Click me')}
  disabled={boolean('disabled', false)}
  type={select('type', buttonTypes, 'primary')}
  mb={3}
/>

<CodeBlock mb={4}>
{`<Button
  label="Click Me"
  onClick={() => console.log('hey')}
/>`}
</CodeBlock>
</Box>

<Flex>
  <Box width={1/2}>
    <Button
      label="Secondary"
      type="secondary"
      mb={3}
    />
  </Box>
  <Box width={1/2}>
<CodeBlock mb={4}>
{`<Button
  label="Secondary"
  type="secondary"
  onClick={() => console.log('hey')}
/>`}
</CodeBlock>
  </Box>
</Flex>
</Fragment>
))
