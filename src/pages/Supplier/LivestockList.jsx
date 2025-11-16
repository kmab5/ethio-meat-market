import React from "react";
import livestock from "../../data/livestock";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";

function LivestockList() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};

    return (
        <Card title={t.myLivestockListings || "My Livestock Listings"}>
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
                        <th style={{ padding: "8px" }}>{t.idLabel || "ID"}</th>
                        <th style={{ padding: "8px" }}>{t.type || "Type"}</th>
                        <th style={{ padding: "8px" }}>{t.breed || "Breed"}</th>
                        <th style={{ padding: "8px" }}>
                            {t.weightKg || "Weight (kg)"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {t.health || "Health"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {t.location || "Location"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {t.status || "Status"}
                        </th>
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
                                {item.status === "Available"
                                    ? t.availableLabel || "Available"
                                    : item.status === "Sold"
                                    ? t.soldLabel || "Sold"
                                    : ""}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default LivestockList;
