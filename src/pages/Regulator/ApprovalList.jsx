import React from "react";
import orders from "../../data/orders";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/table.css";

function ApprovalList() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};
    const pending = orders.filter(
        (o) => o.status === (t.pendingLabel || "Pending")
    );

    return (
        <Card
            classes="tabled"
            title={t.pendingExportApprovals || "Pending Export Approvals"}
        >
            {pending.length === 0 ? (
                <p>{t.allOrdersApproved || "All orders have been approved."}</p>
            ) : (
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>{t.orderId || "Order ID"}</th>
                            <th>{t.exporter || "Exporter"}</th>
                            <th>{t.livestock || "Livestock"}</th>
                            <th>{t.quantity || "Quantity"}</th>
                            <th>{t.action || "Action"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pending.map((o) => (
                            <tr key={o.id}>
                                <td>#{o.id}</td>
                                <td>{o.exporter}</td>
                                <td>{o.livestockType}</td>
                                <td>{o.quantity}</td>
                                <td>
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
