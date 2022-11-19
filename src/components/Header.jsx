const Header = ({ allNotifications, setAllNotifications }) => {
    const getUnreadNotifications = () => (
        allNotifications.filter((notification) => !notification.read)
    )

    return (
        <header>
            <div className="left">
                <span className="boldText">Notifications</span>
                <div className="unreadNotificationNumber">{getUnreadNotifications().length}</div>
            </div>

            <div>
                <button className="markAllAsRead">Mark all as read</button>
            </div>
        </header>
    )
}

export default Header;