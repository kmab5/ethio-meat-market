import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Sidebar() {
    const { language, translations } = useLanguage();

    const links = [
        { to: "/dashboard", key: "dashboard", icon: "🏠" },
        { to: "/supplier", key: "supplier", icon: "👨‍🌾" },
        { to: "/exporter", key: "exporter", icon: "🚚" },
        { to: "/abattoir", key: "abattoir", icon: "🔪" },
        { to: "/airline", key: "airline", icon: "✈️" },
        { to: "/regulator", key: "regulator", icon: "🛡️" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <img
                    src={`${process.env.PUBLIC_URL}/logo192.png`}
                    alt="logo"
                    width={32}
                    height={32}
                    style={{ borderRadius: 6 }}
                />
                <div className="brand">
                    {translations?.[language]?.app || "Ethio Meat Market"}
                </div>
            </div>

            <div
                className="nav"
                role="navigation"
                aria-label={
                    translations?.[language]?.navigation || "Navigation"
                }
            >
                {links.map((l) => (
                    <NavLink
                        key={l.to}
                        to={l.to}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <span className="icon" aria-hidden>
                            {l.icon}
                        </span>
                        <span className="label">
                            {translations?.[language]?.[l.key] || l.key}
                        </span>
                    </NavLink>
                ))}
            </div>

            <div className="footer">
                {new Date().getFullYear()} &copy;{" "}
                {translations?.[language]?.app || "Ethio Meat Market"}
            </div>
        </aside>
    );
}

export default Sidebar;
