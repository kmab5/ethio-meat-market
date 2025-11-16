import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

function Navbar() {
    const [open, setOpen] = useState(false);

    const { language, translations } = useLanguage();

    const linkDefs = [
        { to: "/dashboard", key: "dashboard" },
        { to: "/supplier", key: "supplier" },
        { to: "/exporter", key: "exporter" },
        { to: "/abattoir", key: "abattoir" },
        { to: "/airline", key: "airline" },
        { to: "/regulator", key: "regulator" },
    ];

    const links = linkDefs.map((d) => ({
        to: d.to,
        label: translations?.[language]?.[d.key] || d.key,
    }));

    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <div className="navbar__logo">
                    <img
                        src={`${process.env.PUBLIC_URL}/logo192.png`}
                        alt="Ethio Meat Market logo"
                    />
                </div>
                <div className="navbar__title">
                    {translations?.[language]?.app || "Ethio Meat Market"}
                </div>
            </div>

            <div className="navbar__links nav-desktop-only" aria-hidden={open}>
                <ul>
                    {links.map((l) => (
                        <li key={l.to}>
                            <NavLink
                                to={l.to}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar__actions">
                <div className="nav-desktop-only">
                    <LanguageToggle />
                </div>

                <button className="icon-button" aria-label="Notifications">
                    🔔
                </button>

                <div className="navbar__user">
                    <div className="avatar">A</div>
                    <div className="username nav-desktop-only">Admin</div>
                </div>

                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {open && (
                <div
                    id="mobile-menu"
                    className={`mobile-menu ${open ? "mobile-open" : ""}`}
                    role="menu"
                >
                    <ul>
                        {links.map((l) => (
                            <li key={l.to}>
                                <NavLink
                                    to={l.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    {l.label}
                                </NavLink>
                            </li>
                        ))}

                        <li>
                            <LanguageToggle />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
