import React from "react";
import Card from "../../components/UI/Card";
import ExportChart from "../../components/Charts/ExportChart";
import analytics from "../../data/analytics";
import { useLanguage } from "../../context/LanguageContext";

function Reports() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};

    return (
        <Card title={t.exportReports || "Export Performance Reports"}>
            <p style={{ color: "#555", marginBottom: "1rem" }}>
                {t.exportReportsSummary ||
                    "Monthly export performance and livestock availability summary."}
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
                        <p>
                            {m.count} {t.exportsLabel || "Exports"}
                        </p>
                    </Card>
                ))}
            </div>
        </Card>
    );
}

export default Reports;
