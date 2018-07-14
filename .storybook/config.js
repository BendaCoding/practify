import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import { globalDecorator } from '../src/storybook/globalDecorator';

addDecorator(globalDecorator)
addDecorator(withKnobs)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src', true, /.story\.tsx?$/));
}

configure(loadStories, module);

setOptions({
  // addonPanelInRight: true,
  name: 'Practify',
  url: '#',
})