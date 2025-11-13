import React from "react";

function Card({ title, children }) {
    const cardStyle = {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    };

    return (
        <div style={cardStyle}>
            {title && <h4 style={{ marginBottom: "10px" }}>{title}</h4>}
            {children}
        </div>
    );
}

export default Card;
