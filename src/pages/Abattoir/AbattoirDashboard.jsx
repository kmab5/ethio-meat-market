import React from "react";
import Card from "../../components/UI/Card";
import ScheduleList from "./ScheduleList";
import schedules from "../../data/schedules";
import { useLanguage } from "../../context/LanguageContext";

function AbattoirDashboard() {
    const { language, translations } = useLanguage();

    const upcoming = schedules.filter((s) => s.status === "Scheduled");
    const inTransit = schedules.filter((s) => s.status === "In Transit");

    return (
        <div>
            <h2>
                {translations?.[language]?.abattoirDashboardTitle ||
                    "Abattoir Dashboard"}
            </h2>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                {translations?.[language]?.abattoirDashboardDesc ||
                    "Manage slaughter schedules, packaging, and airline coordination."}
            </p>

            {/* Quick Stats */}
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
                        translations?.[language]?.totalBatches ||
                        "Total Batches"
                    }
                >
                    <p>{schedules.length}</p>
                </Card>
                <Card
                    title={translations?.[language]?.scheduled || "Scheduled"}
                >
                    <p>{upcoming.length}</p>
                </Card>
                <Card
                    title={translations?.[language]?.inTransit || "In Transit"}
                >
                    <p>{inTransit.length}</p>
                </Card>
            </div>

            {/* Detailed Schedule List */}
            <ScheduleList />
        </div>
    );
}

export default AbattoirDashboard;
