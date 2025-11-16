import React from "react";
import Card from "../../components/UI/Card";
import CargoStatus from "./CargoStatus";
import schedules from "../../data/schedules";
import { useLanguage } from "../../context/LanguageContext";

function AirlineDashboard() {
    const { language, translations } = useLanguage();

    const totalFlights = schedules.length;
    const inTransit = schedules.filter((s) => s.status === "In Transit").length;
    const scheduled = schedules.filter((s) => s.status === "Scheduled").length;
    const delivered =
        schedules.filter((s) => s.status === "Delivered").length || 0;

    return (
        <div>
            <h2>
                {translations?.[language]?.airlineDashboardTitle ||
                    "Airline Dashboard"}
            </h2>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                {translations?.[language]?.airlineDashboardDesc ||
                    "Manage and track livestock cargo shipments across Ethiopia and abroad."}
            </p>

            {/* Summary Stats */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginBottom: "2rem",
                }}
            >
                <Card
                    title={
                        translations?.[language]?.totalShipments ||
                        "Total Shipments"
                    }
                >
                    <p>{totalFlights}</p>
                </Card>
                <Card
                    title={
                        translations?.[language]?.scheduledFlights ||
                        "Scheduled Flights"
                    }
                >
                    <p>{scheduled}</p>
                </Card>
                <Card
                    title={translations?.[language]?.inTransit || "In Transit"}
                >
                    <p>{inTransit}</p>
                </Card>
                <Card
                    title={translations?.[language]?.delivered || "Delivered"}
                >
                    <p>{delivered}</p>
                </Card>
            </div>

            {/* Cargo Status Table */}
            <CargoStatus />
        </div>
    );
}

export default AirlineDashboard;
