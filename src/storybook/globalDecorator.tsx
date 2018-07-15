import React from 'react';
import { ThemeProvider, baseTheme } from '../theme';
import { RenderFunction, StoryDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { StoryTemplate } from './StoryTemplate';
import { baseStyles } from '../layout/base-styles';
import { getComponentName } from './utils';
import 'bootstrap/dist/css/bootstrap.css';
import 'typeface-roboto';

baseStyles();

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
  <ThemeProvider theme={baseTheme}>
    <BrowserRouter>
      <StoryTemplate
        storyFn={storyFn}
        name={getComponentName(context.kind)}
      />
    </BrowserRouter>
  </ThemeProvider>
)
