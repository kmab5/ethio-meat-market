import React from "react";
import orders from "../../data/orders";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/table.css";

function Orders() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};

    return (
        <Card classes="tabled" title={t.myOrders || "My Orders"}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>{t.orderId || "Order ID"}</th>
                        <th>{t.supplier || "Supplier"}</th>
                        <th>{t.livestock || "Livestock"}</th>
                        <th>{t.quantity || "Quantity"}</th>
                        <th>{t.status || "Status"}</th>
                        <th>{t.date || "Date"}</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((o) => {
                        const statusClass =
                            o.status === (t.approvedLabel || "Approved") ||
                            o.status === "Approved"
                                ? "status-available"
                                : o.status === (t.pendingLabel || "Pending") ||
                                  o.status === "Pending"
                                ? "status-pending"
                                : o.status === "Shipped"
                                ? "status-intransit"
                                : o.status === "Delivered" ||
                                  o.status === "Completed"
                                ? "status-delivered"
                                : o.status === "Cancelled"
                                ? "status-cancelled"
                                : "status-default";

                        return (
                            <tr key={o.id}>
                                <td>#{o.id}</td>
                                <td>{o.supplier}</td>
                                <td>{o.livestockType}</td>
                                <td>{o.quantity}</td>
                                <td className={`status-cell ${statusClass}`}>
                                    {o.status}
                                </td>
                                <td>{o.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default Orders;
