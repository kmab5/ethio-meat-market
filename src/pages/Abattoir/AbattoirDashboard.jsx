import React from "react";
import Card from "../../components/UI/Card";
import ScheduleList from "./ScheduleList";
import schedules from "../../data/schedules";

function AbattoirDashboard() {
    const upcoming = schedules.filter((s) => s.status === "Scheduled");
    const inTransit = schedules.filter((s) => s.status === "In Transit");

    return (
        <div>
            <h2>Abattoir Dashboard</h2>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                Manage slaughter schedules, packaging, and airline coordination.
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
                <Card title="Total Batches">
                    <p>{schedules.length}</p>
                </Card>
                <Card title="Scheduled">
                    <p>{upcoming.length}</p>
                </Card>
                <Card title="In Transit">
                    <p>{inTransit.length}</p>
                </Card>
            </div>

            {/* Detailed Schedule List */}
            <ScheduleList />
        </div>
    );
}

export default AbattoirDashboard;
