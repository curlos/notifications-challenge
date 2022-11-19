const Header = ({ allNotifications, setAllNotifications }) => {
    const getUnreadNotifications = () => (
        // Only gets the notifications that have the key 'read' equal to false
        allNotifications.filter((notification) => !notification.read)
    )

    const handleMarkAllAsRead = () => {
        // Go through all the notifications and mark each one as 'read'
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