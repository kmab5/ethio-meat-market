import React from "react";

function ExportChart() {
    const data = [
        { month: "Jan", exports: 20 },
        { month: "Feb", exports: 35 },
        { month: "Mar", exports: 30 },
        { month: "Apr", exports: 50 },
    ];

    return (
        <div className="chart-card">
            <h3>Monthly Export Volume (Dummy)</h3>
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: "150px",
                    gap: "10px",
                    marginTop: "10px",
                }}
            >
                {data.map((d) => (
                    <div
                        key={d.month}
                        title={`${d.month}: ${d.exports}`}
                        style={{
                            backgroundColor: "#008037",
                            width: "40px",
                            height: `${d.exports * 2.5}px`,
                            borderRadius: "4px",
                        }}
                    ></div>
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                    fontSize: "0.85rem",
                }}
            >
                {data.map((d) => (
                    <span key={d.month}>{d.month}</span>
                ))}
            </div>
        </div>
    );
}

export default ExportChart;
