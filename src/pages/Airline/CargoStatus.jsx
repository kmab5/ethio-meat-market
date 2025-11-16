import React from "react";
import schedules from "../../data/schedules";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";

function CargoStatus() {
    const { language, translations } = useLanguage();

    return (
        <Card
            title={
                translations?.[language]?.cargoShipmentsOverview ||
                "Cargo Shipments Overview"
            }
        >
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
                            {translations?.[language]?.flightId || "Flight ID"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.airlineLabel ||
                                "Airline"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.batchLabel || "Batch"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.abattoirLabel ||
                                "Abattoir"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.departureDate ||
                                "Departure Date"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.statusLabel || "Status"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((s) => (
                        <tr
                            key={s.id}
                            style={{ borderBottom: "1px solid #ddd" }}
                        >
                            <td style={{ padding: "8px" }}>
                                FL-{s.id.toString().padStart(3, "0")}
                            </td>
                            <td style={{ padding: "8px" }}>{s.airline}</td>
                            <td style={{ padding: "8px" }}>{s.batch}</td>
                            <td style={{ padding: "8px" }}>{s.abattoir}</td>
                            <td style={{ padding: "8px" }}>{s.date}</td>
                            <td
                                style={{
                                    padding: "8px",
                                    color:
                                        s.status === "Scheduled"
                                            ? "#008037"
                                            : s.status === "In Transit"
                                            ? "#e67e22"
                                            : s.status === "Delivered"
                                            ? "#2c3e50"
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

export default CargoStatus;
