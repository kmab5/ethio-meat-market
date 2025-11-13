import React from "react";
import schedules from "../../data/schedules";
import Card from "../../components/UI/Card";

function ScheduleList() {
    return (
        <Card title="Batch Schedules">
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
                        <th style={{ padding: "8px" }}>Batch ID</th>
                        <th style={{ padding: "8px" }}>Abattoir</th>
                        <th style={{ padding: "8px" }}>Date</th>
                        <th style={{ padding: "8px" }}>Livestock Batch</th>
                        <th style={{ padding: "8px" }}>Airline</th>
                        <th style={{ padding: "8px" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((s) => (
                        <tr
                            key={s.id}
                            style={{ borderBottom: "1px solid #ddd" }}
                        >
                            <td style={{ padding: "8px" }}>#{s.id}</td>
                            <td style={{ padding: "8px" }}>{s.abattoir}</td>
                            <td style={{ padding: "8px" }}>{s.date}</td>
                            <td style={{ padding: "8px" }}>{s.batch}</td>
                            <td style={{ padding: "8px" }}>{s.airline}</td>
                            <td
                                style={{
                                    padding: "8px",
                                    color:
                                        s.status === "Scheduled"
                                            ? "#008037"
                                            : s.status === "In Transit"
                                            ? "#e67e22"
                                            : "#555",
                                    fontWeight: 500,
                                }}
                            >
                                {s.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default ScheduleList;
