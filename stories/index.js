import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';
import TreeControl from 'react-tree-control';

storiesOf('Tree control', module)
  .add('Default', () => (
    <TreeControl />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
