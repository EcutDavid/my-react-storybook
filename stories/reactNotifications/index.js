import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ReactNotificationsThreeTypes from './threeTypes';
import ReactNotificationsAddNewMessageWithTimer from './addNewMessageWithTimer';
import ReactNotificationsAddNewMessageWithTextInput from './addNewMessageWithTextInput';

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
