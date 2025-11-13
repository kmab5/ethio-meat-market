import React from "react";
import LanguageToggle from "./LanguageToggle";
import "./Navbar.css"; // optional, if you decide to add one later

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2>EthioMeatApp</h2>
            </div>
            <div className="navbar-right">
                <LanguageToggle />
                <div className="navbar-user">
                    <span>👤 Admin</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
