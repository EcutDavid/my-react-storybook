import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TreeControl from 'react-tree-control';
import TwoLayerTreeControl from './treeControl/twoLayer';
import ThreeLayerTreeControl from './treeControl/threeLayer';

storiesOf('Tree control', module)
  .add('Default', () => (
    <TreeControl />
  ))
  .add('Two layer', () => (
    <TwoLayerTreeControl />
  ))
  .add('Three layer', () => (
    <ThreeLayerTreeControl />
  ));
