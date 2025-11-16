import React, { useState } from "react";
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

    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        if (typeof window !== "undefined" && window.innerWidth < 768) return;
        setCollapsed((c) => !c);
    };

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
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

                {/* Collapse control as final nav item */}
                <button
                    type="button"
                    className="collapse-btn"
                    onClick={handleToggle}
                    aria-pressed={collapsed}
                    title={
                        collapsed
                            ? translations?.[language]?.expand || "Expand"
                            : translations?.[language]?.collapse || "Collapse"
                    }
                >
                    <span className="icon" aria-hidden>
                        {collapsed ? "›" : "‹"}
                    </span>
                    <span className="label">
                        {collapsed
                            ? translations?.[language]?.expand || "Expand"
                            : translations?.[language]?.collapse || "Collapse"}
                    </span>
                </button>
            </div>

            <div className="footer">
                {new Date().getFullYear()} &copy;{" "}
                {translations?.[language]?.app || "Ethio Meat Market"}
            </div>
        </aside>
    );
}

export default Sidebar;
