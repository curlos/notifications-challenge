import React, { useState } from 'react'

const Notification = ({ notification }) => {
    const { author, actionMessage, postOrGroup, timeAgo, privateMessage, picture, read } = notification

    return (
        <div className={`notificationWrapper` + `${!read ? ' unreadNotification' : ''}`}>
            <img src="/assets/images/avatar-mark-webber.webp" alt="Mark Webber" className="profilePic" />

            <div>
                <div className="notificationMessage">
                    <span className="boldText">Mark Webber</span>

                    <span>reacted to your recent post</span>

                    <span className="boldText">My first tournament today!</span>

                    <span className={'hidden' + ` ${!read ? 'unreadDot' : ''}`}></span>
                </div>

                <div className="timeAgo">1m ago</div>
            </div>
        </div>
    )
}

export default Notification;