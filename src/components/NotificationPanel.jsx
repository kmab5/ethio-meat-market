import React from "react";
import notifications from "../data/notifications";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/NotificationPanel.module.css";

function NotificationPanel() {
    const { language, translations } = useLanguage();
    const header =
        translations?.[language]?.notificationsTitle || "Notifications";

    const formatTimestamp = (iso) => {
        try {
            const dt = new Date(iso);
            if (Number.isNaN(dt.getTime())) return "";
            const opts = {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            return new Intl.DateTimeFormat(language || undefined, opts).format(
                dt
            );
        } catch (e) {
            return iso || "";
        }
    };

    if (!notifications || notifications.length === 0) {
        return (
            <div className={styles.panel}>
                <h3>{header}</h3>
                <p className={styles.empty}>
                    {translations?.[language]?.noNotifications ||
                        "No notifications"}
                </p>
            </div>
        );
    }

    const typeIconMap = {
        info: "ℹ️",
        warning: "⚠️",
        error: "❌",
        success: "✅",
    };

    const getIcon = (type) => typeIconMap[(type || "").toLowerCase()] || "🔔";

    return (
        <div className={styles.panel}>
            <h3>{header}</h3>
            <ul className={styles.list}>
                {notifications.map((n) => (
                    <li
                        key={n.id}
                        className={`${styles.notif} ${styles[n.type] || ""}`}
                    >
                        <span
                            className={`${styles.icon} ${styles[n.type] || ""}`}
                            title={n.type}
                            aria-label={n.type}
                        >
                            {getIcon(n.type)}
                        </span>

                        <div className={styles.content}>
                            <div className={styles.message}>{n.message}</div>
                        </div>

                        {n.dateTime && (
                            <div className={styles.timestamp}>
                                {formatTimestamp(n.dateTime)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotificationPanel;
