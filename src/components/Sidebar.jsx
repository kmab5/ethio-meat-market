import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Sidebar() {
    const { language, translations } = useLanguage();

    return (
        <aside className="sidebar">
            <h3>{translations?.[language]?.navigation || "Navigation"}</h3>
            <nav>
                <Link to="/dashboard">
                    {translations?.[language]?.dashboard || "Dashboard"}
                </Link>
                <Link to="/supplier">
                    {translations?.[language]?.supplier || "Supplier"}
                </Link>
                <Link to="/exporter">
                    {translations?.[language]?.exporter || "Exporter"}
                </Link>
                <Link to="/abattoir">
                    {translations?.[language]?.abattoir || "Abattoir"}
                </Link>
                <Link to="/airline">
                    {translations?.[language]?.airline || "Airline"}
                </Link>
                <Link to="/regulator">
                    {translations?.[language]?.regulator || "Regulator"}
                </Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
