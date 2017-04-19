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

  addMessage() {
    const { type, message } = this.refs;
    const { notifications } = this.state;

    const newNotifications =
      notifications.concat({
        type: type.value,
        message: message.value
      });

    this.setState({notifications: newNotifications});
  }

  render() {
   return (
     <div>
       <h2>Opacity: 10</h2>
       <p>Only 10 items can be displayed at the same time</p>
       <div style={{ marginBottom: 20, textAlign: 'left', width: 230, display: 'inline-block' }}>
         type: <select ref='type'>
          <option value='info' selected>info</option>
          <option value='warning' >warning</option>
          <option value='error'>error</option>
        </select>
        <br />
         message: <input ref='message' type='text'></input>
       </div>
       <br />
       <button onClick={this.addMessage.bind(this)}>Add</button>
       <br />
       <ReactNotifications
           capacity={20}
           notifications={this.state.notifications}
           onClose={this.oncloseHandle.bind(this)}
       />
   </div>
   );
  }
}
