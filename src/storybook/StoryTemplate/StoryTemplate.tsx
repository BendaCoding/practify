import React, { Fragment, SFC } from 'react';
import { StorybookHeader } from '../StorybookHeader';
import { RenderFunction } from '@storybook/react';
import * as S from './styled';
import { H1 } from '../../components';
import { CodeBlock } from '../CodeBlock';

export interface IStoryTemplateProps {
  storyFn: RenderFunction;
  name: string;
}
 
export const StoryTemplate: SFC<IStoryTemplateProps> = ({ name, storyFn }) => (
  <S.Wrapper>
    <StorybookHeader />
    <H1 mb={3}>{name}</H1>
    <CodeBlock mb={3} display="inline-block">
      {`import { ${name} } from 'practify/components';`}
    </CodeBlock>
    {storyFn()}
  </S.Wrapper>
)
