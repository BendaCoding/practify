import React, { Fragment, SFC } from 'react';
import { StoryHeader } from './StoryHeader';
import { RenderFunction } from '@storybook/react';

export interface IStoryTemplateProps {
  storyFn: RenderFunction;
}
 
export const StoryTemplate: SFC<IStoryTemplateProps> = ({ storyFn }) => (
  <Fragment>
    <StoryHeader />
    {storyFn()}
  </Fragment>
)
