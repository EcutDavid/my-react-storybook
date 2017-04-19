import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TreeControl from 'react-tree-control';
import TwoLayerTreeControl from './twoLayer';
import ThreeLayerTreeControl from './threeLayer';

storiesOf('Tree control', module)
  .add('Default', () => (
    <TreeControl defaultExpand />
  ))
  .add('Two layer', () => (
    <TwoLayerTreeControl />
  ))
  .add('Three layer', () => (
    <ThreeLayerTreeControl defaultExpand />
  ))
  .add('Not expand by default', () => (
    <ThreeLayerTreeControl defaultExpand={false} />
  ));
