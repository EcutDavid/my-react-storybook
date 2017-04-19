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

  componentDidMount() {
    setInterval(() => {
      const { notifications } = this.state;
      const newNotifications = notifications.concat({
        type: 'warning',
        message: `Lenght of the notifications queue: ${notifications.length}`
      });
      this.setState({notifications: newNotifications});
    }, 1000);
  }

  oncloseHandle(index) {
    const { notifications } = this.state;

    const newNotifications =
      notifications.slice(0, index).concat(notifications.slice(index + 1));

    this.setState({notifications: newNotifications});
  }

  render() {
   return (
     <div>
       <h2>Opacity: 20</h2>
       <p>Only 20 items can be displayed at the same time</p>
       <ReactNotifications
           capacity={20}
           notifications={this.state.notifications}
           onClose={this.oncloseHandle.bind(this)}
       />
   </div>
   );
  }
}
