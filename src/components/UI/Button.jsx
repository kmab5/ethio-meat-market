import React from "react";

function Button({ label, onClick, type = "primary" }) {
    const styles = {
        primary: {
            backgroundColor: "#008037",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
        },
        secondary: {
            backgroundColor: "#e0e0e0",
            color: "#333",
            padding: "8px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
        },
    };

    return (
        <button style={styles[type]} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
