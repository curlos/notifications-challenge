const Header = ({ allNotifications, setAllNotifications }) => {
    const getUnreadNotifications = () => (
        allNotifications.filter((notification) => !notification.read)
    )

    const handleMarkAllAsRead = () => {
        const allNotificationsRead = allNotifications.map((notification) => {
            return {
                ...notification,
                read: true
            }
        })

        setAllNotifications([...allNotificationsRead])
    }

    return (
        <header>
            <div className="left">
                <span className="boldText">Notifications</span>
                <div className="unreadNotificationNumber">{getUnreadNotifications().length}</div>
            </div>

            <div>
                <button className="markAllAsRead" onClick={handleMarkAllAsRead}>Mark all as read</button>
            </div>
        </header>
    )
}

export default Header;