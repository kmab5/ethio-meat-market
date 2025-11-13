import React from "react";
import Card from "../../components/UI/Card";
import ExportChart from "../../components/Charts/ExportChart";
import analytics from "../../data/analytics";

function Reports() {
    return (
        <Card title="Export Performance Reports">
            <p style={{ color: "#555", marginBottom: "1rem" }}>
                Monthly export performance and livestock availability summary.
            </p>

            {/* Chart */}
            <ExportChart />

            {/* Data Summary */}
            <div
                style={{
                    marginTop: "1.5rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                }}
            >
                {analytics.monthlyExports.map((m) => (
                    <Card key={m.month} title={m.month}>
                        <p>{m.count} Exports</p>
                    </Card>
                ))}
            </div>
        </Card>
    );
}

export default Reports;
