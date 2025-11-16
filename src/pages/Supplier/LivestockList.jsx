import React from "react";
import livestock from "../../data/livestock";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/table.css";

function LivestockList() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};

    return (
        <Card
            classes="tabled"
            title={t.myLivestockListings || "My Livestock Listings"}
        >
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>{t.idLabel || "ID"}</th>
                        <th>{t.type || "Type"}</th>
                        <th>{t.breed || "Breed"}</th>
                        <th>{t.weightKg || "Weight (kg)"}</th>
                        <th>{t.health || "Health"}</th>
                        <th>{t.location || "Location"}</th>
                        <th>{t.status || "Status"}</th>
                    </tr>
                </thead>
                <tbody>
                    {livestock.map((item) => {
                        const statusClass =
                            item.status === "Available"
                                ? "status-available"
                                : item.status === "Sold"
                                ? "status-sold"
                                : "status-pending";

                        return (
                            <tr key={item.id}>
                                <td>#{item.id}</td>
                                <td>{item.type}</td>
                                <td>{item.breed}</td>
                                <td>{item.weightKg}</td>
                                <td>{item.health}</td>
                                <td>{item.location}</td>
                                <td className={`status-cell ${statusClass}`}>
                                    {item.status === "Available"
                                        ? t.availableLabel || "Available"
                                        : item.status === "Sold"
                                        ? t.soldLabel || "Sold"
                                        : item.status === "Pending"
                                        ? t.pendingLabel || "Pending"
                                        : item.status}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default LivestockList;
