import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/react-vis.js');
  require('../stories/recharts.js');
  require('../stories/react-sparklines.js');
}
configure(loadStories, module);
