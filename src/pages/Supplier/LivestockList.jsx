import React from "react";
import livestock from "../../data/livestock";
import Card from "../../components/UI/Card";

function LivestockList() {
    return (
        <Card title="My Livestock Listings">
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "10px",
                }}
            >
                <thead>
                    <tr
                        style={{
                            backgroundColor: "#f1f1f1",
                            textAlign: "left",
                        }}
                    >
                        <th style={{ padding: "8px" }}>ID</th>
                        <th style={{ padding: "8px" }}>Type</th>
                        <th style={{ padding: "8px" }}>Breed</th>
                        <th style={{ padding: "8px" }}>Weight (kg)</th>
                        <th style={{ padding: "8px" }}>Health</th>
                        <th style={{ padding: "8px" }}>Location</th>
                        <th style={{ padding: "8px" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {livestock.map((item) => (
                        <tr
                            key={item.id}
                            style={{ borderBottom: "1px solid #ddd" }}
                        >
                            <td style={{ padding: "8px" }}>#{item.id}</td>
                            <td style={{ padding: "8px" }}>{item.type}</td>
                            <td style={{ padding: "8px" }}>{item.breed}</td>
                            <td style={{ padding: "8px" }}>{item.weightKg}</td>
                            <td style={{ padding: "8px" }}>{item.health}</td>
                            <td style={{ padding: "8px" }}>{item.location}</td>
                            <td
                                style={{
                                    padding: "8px",
                                    color:
                                        item.status === "Available"
                                            ? "#008037"
                                            : item.status === "Sold"
                                            ? "#e67e22"
                                            : "#555",
                                    fontWeight: 500,
                                }}
                            >
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default LivestockList;
