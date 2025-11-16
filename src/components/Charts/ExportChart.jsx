import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import analytics from "../../data/analytics";
import "./ExportChart.css";

function ExportChart() {
    const { language, translations } = useLanguage();
    const title =
        translations?.[language]?.monthlyExportVolumeTitle ||
        "Monthly Export Volume (Dummy)";

    const data = analytics.monthlyExports || [];
    const counts = data.map((d) => d.count || 0);
    const max = Math.max(1, ...counts);
    const chartHeight = 160; // px available for bars

    // Build a few tick values for Y axis (0..max)
    const ticks = [
        0,
        Math.ceil(max * 0.25),
        Math.ceil(max * 0.5),
        Math.ceil(max * 0.75),
        Math.ceil(max),
    ];

    return (
        <div className="chart-card">
            <h3>{title}</h3>

            <div className="chart-grid">
                <div className="y-axis" aria-hidden>
                    {ticks
                        .slice()
                        .reverse()
                        .map((t) => (
                            <div key={t} className="y-tick">
                                {t}
                            </div>
                        ))}
                </div>

                <div className="chart-area">
                    <div className="chart-bars">
                        {data.map((d) => {
                            const h = ((d.count || 0) / max) * chartHeight;
                            return (
                                <div
                                    key={d.month}
                                    className="bar"
                                    title={`${d.month}: ${d.count}`}
                                    style={{ height: `${Math.max(2, h)}px` }}
                                />
                            );
                        })}
                    </div>

                    <div className="chart-months">
                        {data.map((d) => (
                            <span key={d.month} className="month-label">
                                {d.month}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExportChart;
