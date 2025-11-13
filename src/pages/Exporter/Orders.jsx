import React from "react";
import orders from "../../data/orders";
import Card from "../../components/UI/Card";

function Orders() {
    return (
        <Card title="My Orders">
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
                        <th style={{ padding: "8px" }}>Supplier</th>
                        <th style={{ padding: "8px" }}>Livestock</th>
                        <th style={{ padding: "8px" }}>Quantity</th>
                        <th style={{ padding: "8px" }}>Status</th>
                        <th style={{ padding: "8px" }}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((o) => (
                        <tr
                            key={o.id}
                            style={{ borderBottom: "1px solid #ddd" }}
                        >
                            <td style={{ padding: "8px" }}>#{o.id}</td>
                            <td style={{ padding: "8px" }}>{o.supplier}</td>
                            <td style={{ padding: "8px" }}>
                                {o.livestockType}
                            </td>
                            <td style={{ padding: "8px" }}>{o.quantity}</td>
                            <td
                                style={{
                                    padding: "8px",
                                    color:
                                        o.status === "Approved"
                                            ? "#008037"
                                            : o.status === "Pending"
                                            ? "#e67e22"
                                            : "#555",
                                    fontWeight: 500,
                                }}
                            >
                                {o.status}
                            </td>
                            <td style={{ padding: "8px" }}>{o.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default Orders;
