import React from 'react';
import ReactNotifications from '@davidguan/react-notifications';

const MOCK_NOTIFICATIONS = [{
  type: 'info',
  message: 'Hello'
}, {
  type: 'warning',
  message: 'Hi'
}, {
  type: 'error',
  message: 'Oooops'
}];

export default class Component extends React.Component {
  constructor() {
    super();
    this.state = {notifications: MOCK_NOTIFICATIONS};
  }

  oncloseHandle(index) {
    const { notifications } = this.state;

    const newNotifications =
      notifications.slice(0, index).concat(notifications.slice(index + 1));

    this.setState({notifications: newNotifications});
  }

  render() {
   return (
     <ReactNotifications
       capacity={10}
       notifications={this.state.notifications}
       onClose={this.oncloseHandle.bind(this)}
     />
   );
  }
}
