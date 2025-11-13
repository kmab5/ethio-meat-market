import React from "react";
import notifications from "../data/notifications";

function NotificationPanel() {
    return (
        <div className="notification-panel">
            <h3>Notifications</h3>
            <ul>
                {notifications.map((n) => (
                    <li key={n.id} className={`notif ${n.type}`}>
                        <strong>{n.type.toUpperCase()}:</strong> {n.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotificationPanel;
