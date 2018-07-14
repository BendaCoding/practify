import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { globalDecorator } from '../src/storybook/globalDecorator';

addDecorator(globalDecorator)
addDecorator(withKnobs)

const req = require.context('../src', true, /.story\.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

setOptions({
  addonPanelInRight: true,
  name: 'Practify UI Library',
})