import React from "react";

function Button({ label, onClick, type = "primary" }) {
    const base = {
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "0.95rem",
        fontWeight: 600,
        letterSpacing: "0.2px",
    };

    const styles = {
        primary: {
            ...base,
            backgroundColor: "#008037",
            color: "white",
        },
        secondary: {
            ...base,
            backgroundColor: "#e0e0e0",
            color: "#333",
        },
    };

    return (
        <button style={styles[type]} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
