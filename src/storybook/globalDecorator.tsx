import React from 'react';
import { ThemeProvider, theme } from '../theme';
import { RenderFunction, StoryDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { StoryTemplate } from './StoryTemplate';

export type StoryDecoratorWithoutContext = (
  story: RenderFunction,
  context?: { kind: string; story: string },
) => ReturnType<StoryDecorator>

const defaultContext = {
  kind: 'unknown',
  story: 'unknown',
}

export const globalDecorator: StoryDecoratorWithoutContext = (
  storyFn,
  context = defaultContext,
) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StoryTemplate
        storyFn={storyFn}
      />
    </BrowserRouter>
  </ThemeProvider>
)
