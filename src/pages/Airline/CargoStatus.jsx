import React from "react";
import schedules from "../../data/schedules";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/table.css";

function CargoStatus() {
    const { language, translations } = useLanguage();

    return (
        <Card
            classes="tabled"
            title={
                translations?.[language]?.cargoShipmentsOverview ||
                "Cargo Shipments Overview"
            }
        >
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>
                            {translations?.[language]?.flightId || "Flight ID"}
                        </th>
                        <th>
                            {translations?.[language]?.airlineLabel ||
                                "Airline"}
                        </th>
                        <th>
                            {translations?.[language]?.batchLabel || "Batch"}
                        </th>
                        <th>
                            {translations?.[language]?.abattoirLabel ||
                                "Abattoir"}
                        </th>
                        <th>
                            {translations?.[language]?.departureDate ||
                                "Departure Date"}
                        </th>
                        <th>
                            {translations?.[language]?.statusLabel || "Status"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((s) => {
                        const statusClass =
                            s.status === "Scheduled"
                                ? "status-scheduled"
                                : s.status === "In Transit"
                                ? "status-intransit"
                                : s.status === "Delivered" ||
                                  s.status === "Completed"
                                ? "status-delivered"
                                : "status-default";

                        return (
                            <tr key={s.id}>
                                <td>FL-{s.id.toString().padStart(3, "0")}</td>
                                <td>{s.airline}</td>
                                <td>{s.batch}</td>
                                <td>{s.abattoir}</td>
                                <td>{s.date}</td>
                                <td className={`status-cell ${statusClass}`}>
                                    {s.status}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default CargoStatus;
