import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const createNotification = (type,title="Title here",message="a message") => {
  return () => {
    switch (type) {
      case 'info':
        NotificationManager.info(message);
        break;
      case 'success':
        NotificationManager.success(message, title);
        break;
      case 'warning':
        NotificationManager.warning(message, title, 3000);
        break;
      case 'error':
        NotificationManager.error(message, title, 5000, () => {
          alert('callback');
        });
        break;
    }
  };
};
export default class PopUpMessage extends React.Component {
  
 
  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={createNotification('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={createNotification('error')}>Error
        </button>
 
        <NotificationContainer/>
      </div>
    );
  }
}
 
export {createNotification}