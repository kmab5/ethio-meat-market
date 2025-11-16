import React from "react";
import orders from "../../data/orders";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { useLanguage } from "../../context/LanguageContext";

function ApprovalList() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};
    const pending = orders.filter(
        (o) => o.status === (t.pendingLabel || "Pending")
    );

    return (
        <Card title={t.pendingExportApprovals || "Pending Export Approvals"}>
            {pending.length === 0 ? (
                <p>{t.allOrdersApproved || "All orders have been approved."}</p>
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
                            <th style={{ padding: "8px" }}>
                                {t.orderId || "Order ID"}
                            </th>
                            <th style={{ padding: "8px" }}>
                                {t.exporter || "Exporter"}
                            </th>
                            <th style={{ padding: "8px" }}>
                                {t.livestock || "Livestock"}
                            </th>
                            <th style={{ padding: "8px" }}>
                                {t.quantity || "Quantity"}
                            </th>
                            <th style={{ padding: "8px" }}>
                                {t.action || "Action"}
                            </th>
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
                                        label={t.approve || "Approve"}
                                        type="primary"
                                        onClick={() =>
                                            alert(
                                                (t.orderApprovedAlert &&
                                                    t.orderApprovedAlert.replace(
                                                        "{{id}}",
                                                        o.id
                                                    )) ||
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
