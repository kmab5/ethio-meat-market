import React from "react";
import Card from "../../components/UI/Card";
import ApprovalList from "./ApprovalList";
import Reports from "./Reports";
import analytics from "../../data/analytics";
import orders from "../../data/orders";

function RegulatorDashboard() {
    const pendingApprovals = orders.filter(
        (o) => o.status === "Pending"
    ).length;
    const approved = orders.filter((o) => o.status === "Approved").length;

    return (
        <div>
            <h2>Regulatory Authority Dashboard</h2>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                Monitor export activities, manage approvals, and review
                performance insights.
            </p>

            {/* Summary Metrics */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginBottom: "2rem",
                }}
            >
                <Card title="Total Livestock">
                    <p>{analytics.totalLivestock}</p>
                </Card>
                <Card title="Approved Exports">
                    <p>{approved}</p>
                </Card>
                <Card title="Pending Approvals">
                    <p>{pendingApprovals}</p>
                </Card>
                <Card title="Available for Export">
                    <p>{analytics.availableForExport}</p>
                </Card>
            </div>

            {/* Approval Table */}
            <ApprovalList />

            {/* Reports Section */}
            <Reports />
        </div>
    );
}

export default RegulatorDashboard;
