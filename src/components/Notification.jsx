import React, { useState } from 'react'

const Notification = ({ notification, allNotifications, setAllNotifications }) => {
    const { id, author, profilePicSrc, actionMessage, postOrGroup, timeAgo, privateMessage, postPicSrc, read } = notification

    const handleClickNotification = () => {
        if (read) {
            return
        }

        const updatedNotifications = allNotifications.map((notification) => {
            if (notification.id === id) {
                notification.read = true
            }

            return notification
        })

        setAllNotifications([...updatedNotifications])
    }

    return (
        <div onClick={handleClickNotification} className={`notificationWrapper` + `${!read ? ' unreadNotification' : ''}`}>
            <div className="notificationInnerWrapper">
                <img src={profilePicSrc} alt={author} className="profilePic" />

                <div className="notificationDetails">
                    <div className="notificationMessage">
                        <span>
                            <span className="boldText">{author}</span>
                            <span className="actionMessage"> {actionMessage} </span>
                            {postOrGroup ? <span className="boldText">{postOrGroup}</span> : ''}
                        </span>
                        <span className={'hidden' + ` ${!read ? 'unreadDot' : ''}`}></span>
                    </div>

                    <div className="timeAgo">{timeAgo}</div>

                    {privateMessage ? (
                        <div className="privateMessageWrapper">
                            {privateMessage}
                        </div>
                    ) : ''}
                </div>
            </div>

            {postPicSrc ? (
                <div>
                    <img src={postPicSrc} alt="" className="postPic" />
                </div>
            ) : ''}
        </div>
    )
}

export default Notification;