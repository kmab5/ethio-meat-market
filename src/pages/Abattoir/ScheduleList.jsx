import React from "react";
import schedules from "../../data/schedules";
import Card from "../../components/UI/Card";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/table.css";

function ScheduleList() {
    const { language, translations } = useLanguage();

    return (
        <Card
            classes="tabled"
            title={
                translations?.[language]?.batchSchedules || "Batch Schedules"
            }
        >
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>
                            {translations?.[language]?.batchId || "Batch ID"}
                        </th>
                        <th>
                            {translations?.[language]?.abattoirLabel ||
                                "Abattoir"}
                        </th>
                        <th>{translations?.[language]?.dateLabel || "Date"}</th>
                        <th>
                            {translations?.[language]?.livestockBatch ||
                                "Livestock Batch"}
                        </th>
                        <th>
                            {translations?.[language]?.airlineLabel ||
                                "Airline"}
                        </th>
                        <th>
                            {translations?.[language]?.statusLabel || "Status"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((s) => {
                        const statusClass =
                            s.status === "Scheduled"
                                ? "status-scheduled"
                                : s.status === "In Transit"
                                ? "status-intransit"
                                : s.status === "Completed"
                                ? "status-completed"
                                : s.status === "Cancelled"
                                ? "status-cancelled"
                                : "status-default";

                        return (
                            <tr key={s.id}>
                                <td>#{s.id}</td>
                                <td>{s.abattoir}</td>
                                <td>{s.date}</td>
                                <td>{s.batch}</td>
                                <td>{s.airline}</td>
                                <td className={`status-cell ${statusClass}`}>
                                    {s.status}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default ScheduleList;
