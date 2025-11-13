import React from "react";
import Card from "../components/UI/Card";
import NotificationPanel from "../components/NotificationPanel";
import ExportChart from "../components/Charts/ExportChart";
import analytics from "../data/analytics";

function Dashboard() {
    return (
        <div>
            <h2>Dashboard Overview</h2>

            {/* Summary Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginTop: "1.5rem",
                }}
            >
                <Card title="Total Livestock">
                    <p>{analytics.totalLivestock}</p>
                </Card>
                <Card title="Available for Export">
                    <p>{analytics.availableForExport}</p>
                </Card>
                <Card title="Approved Exports">
                    <p>{analytics.approvedExports}</p>
                </Card>
                <Card title="Pending Approvals">
                    <p>{analytics.pendingApprovals}</p>
                </Card>
            </div>

            {/* Chart Section */}
            <div style={{ marginTop: "2rem" }}>
                <ExportChart />
            </div>

            {/* Notifications */}
            <div style={{ marginTop: "2rem" }}>
                <NotificationPanel />
            </div>
        </div>
    );
}

export default Dashboard;
