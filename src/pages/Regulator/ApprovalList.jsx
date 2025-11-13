import React from "react";
import orders from "../../data/orders";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

function ApprovalList() {
    const pending = orders.filter((o) => o.status === "Pending");

    return (
        <Card title="Pending Export Approvals">
            {pending.length === 0 ? (
                <p>All orders have been approved.</p>
            ) : (
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
                            <th style={{ padding: "8px" }}>Order ID</th>
                            <th style={{ padding: "8px" }}>Exporter</th>
                            <th style={{ padding: "8px" }}>Livestock</th>
                            <th style={{ padding: "8px" }}>Quantity</th>
                            <th style={{ padding: "8px" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pending.map((o) => (
                            <tr
                                key={o.id}
                                style={{ borderBottom: "1px solid #ddd" }}
                            >
                                <td style={{ padding: "8px" }}>#{o.id}</td>
                                <td style={{ padding: "8px" }}>{o.exporter}</td>
                                <td style={{ padding: "8px" }}>
                                    {o.livestockType}
                                </td>
                                <td style={{ padding: "8px" }}>{o.quantity}</td>
                                <td style={{ padding: "8px" }}>
                                    <Button
                                        label="Approve"
                                        type="primary"
                                        onClick={() =>
                                            alert(
                                                `Order #${o.id} approved (dummy)`
                                            )
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Card>
    );
}

export default ApprovalList;
