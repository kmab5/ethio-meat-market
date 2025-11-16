import React from "react";
import notifications from "../data/notifications";
import { useLanguage } from "../context/LanguageContext";

function NotificationPanel() {
    const { language, translations } = useLanguage();
    const header =
        translations?.[language]?.notificationsTitle || "Notifications";
    const typeLabel = translations?.[language]?.typeLabel || "Type";

    return (
        <div className="notification-panel">
            <h3>{header}</h3>
            <ul>
                {notifications.map((n) => (
                    <li key={n.id} className={`notif ${n.type}`}>
                        <strong>{typeLabel.toUpperCase()}:</strong> {n.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotificationPanel;
