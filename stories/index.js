import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TreeControl from 'react-tree-control';
import TwoLayerTreeControl from './treeControl/twoLayer';
import ThreeLayerTreeControl from './treeControl/threeLayer';
import ReactNotificationsThreeTypes from './reactNotifications/threeTypes';
import ReactNotificationsAddNewMessageWithTimer from './reactNotifications/addNewMessageWithTimer';
import ReactNotificationsAddNewMessageWithTextInput from './reactNotifications/addNewMessageWithTextInput';

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

storiesOf('React Notifications', module)
  .add('Three supported types', () => (
    <ReactNotificationsThreeTypes />
  ))
  .add('Add new message with timer', () => (
    <ReactNotificationsAddNewMessageWithTimer />
  ))
  .add('Add new message with text input', () => (
    <ReactNotificationsAddNewMessageWithTextInput />
  ));
