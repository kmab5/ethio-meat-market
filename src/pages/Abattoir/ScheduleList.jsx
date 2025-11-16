import React from "react";
import schedules from "../../data/schedules";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";

function ScheduleList() {
    const { language, translations } = useLanguage();

    return (
        <Card
            title={
                translations?.[language]?.batchSchedules || "Batch Schedules"
            }
        >
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "10px",
                }}
            >
                <thead>
                    <tr
                        style={{
                            backgroundColor: "#f1f1f1",
                            textAlign: "left",
                        }}
                    >
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.batchId || "Batch ID"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.abattoirLabel ||
                                "Abattoir"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.dateLabel || "Date"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.livestockBatch ||
                                "Livestock Batch"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.airlineLabel ||
                                "Airline"}
                        </th>
                        <th style={{ padding: "8px" }}>
                            {translations?.[language]?.statusLabel || "Status"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((s) => (
                        <tr
                            key={s.id}
                            style={{ borderBottom: "1px solid #ddd" }}
                        >
                            <td style={{ padding: "8px" }}>#{s.id}</td>
                            <td style={{ padding: "8px" }}>{s.abattoir}</td>
                            <td style={{ padding: "8px" }}>{s.date}</td>
                            <td style={{ padding: "8px" }}>{s.batch}</td>
                            <td style={{ padding: "8px" }}>{s.airline}</td>
                            <td
                                style={{
                                    padding: "8px",
                                    color:
                                        s.status === "Scheduled"
                                            ? "#008037"
                                            : s.status === "In Transit"
                                            ? "#e67e22"
                                            : "#555",
                                    fontWeight: 500,
                                }}
                            >
                                {s.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default ScheduleList;
