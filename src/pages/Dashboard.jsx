import React from "react";
import Card from "../components/UI/Card";
import NotificationPanel from "../components/NotificationPanel";
import ExportChart from "../components/Charts/ExportChart";
import analytics from "../data/analytics";
import { useLanguage } from "../context/LanguageContext";

function Dashboard() {
    const { language, translations } = useLanguage();

    return (
        <div>
            <h2>
                {translations?.[language]?.dashboardOverview ||
                    "Dashboard Overview"}
            </h2>

            {/* Summary Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginTop: "1.5rem",
                }}
            >
                <Card
                    title={
                        translations?.[language]?.totalLivestock ||
                        "Total Livestock"
                    }
                >
                    <p>{analytics.totalLivestock}</p>
                </Card>
                <Card
                    title={
                        translations?.[language]?.availableForExport ||
                        "Available for Export"
                    }
                >
                    <p>{analytics.availableForExport}</p>
                </Card>
                <Card
                    title={
                        translations?.[language]?.approvedExports ||
                        "Approved Exports"
                    }
                >
                    <p>{analytics.approvedExports}</p>
                </Card>
                <Card
                    title={
                        translations?.[language]?.pendingApprovals ||
                        "Pending Approvals"
                    }
                >
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
