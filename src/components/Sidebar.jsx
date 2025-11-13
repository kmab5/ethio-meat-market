import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>Navigation</h3>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/supplier">Supplier</Link>
                <Link to="/exporter">Exporter</Link>
                <Link to="/abattoir">Abattoir</Link>
                <Link to="/airline">Airline</Link>
                <Link to="/regulator">Regulator</Link>
            </nav>
        </aside>
    );
}

export default Sidebar;
