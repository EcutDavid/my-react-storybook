import { configure } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';

setOptions({
  name: 'David\'s Storybook',
  url: 'https://github.com/EcutDavid/my-react-storybook'
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
