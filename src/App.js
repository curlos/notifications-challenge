import React, { useState } from 'react'
import Notification from './components/Notification';
import NotificationList from './components/NotificationList';
import { baseNotifications } from './utils/notifications';
import Header from './components/Header'
import './App.css';

const App = () => {

  const [allNotifications, setAllNotifications] = useState([...baseNotifications])

  return (
    <div className="outerMainContainer">
      <div className="mainContainer">
        <Header allNotifications={allNotifications} setAllNotifications={setAllNotifications} />
        <NotificationList allNotifications={allNotifications} setAllNotifications={setAllNotifications} />
      </div>
    </div>
  );
}

export default App;
