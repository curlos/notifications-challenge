import React, { useEffect, useState } from 'react'
import Notification from './Notification';

const NotificationList = ({ allNotifications, setAllNotifications }) => {
    return (
        <div className="notificationList">
            {allNotifications.map((notification) => (
                <Notification key={notification.id} notification={notification} allNotifications={allNotifications} setAllNotifications={setAllNotifications} />
            ))}
        </div>
    )
}

export default NotificationList;