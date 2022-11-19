import React, { useEffect, useState } from 'react'
import Notification from './Notification';

const NotificationList = ({ allNotifications, setAllNotifications }) => {


    return (
        <div>
            {allNotifications.map((i, notification) => (
                <Notification key={i} notification={notification} />
            ))}
        </div>
    )
}

export default NotificationList;