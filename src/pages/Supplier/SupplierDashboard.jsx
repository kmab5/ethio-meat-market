import React from "react";
import Card from "../../components/UI/Card";
import LivestockList from "./LivestockList";
import RegisterLivestock from "./RegisterLivestock";
import livestock from "../../data/livestock";

function SupplierDashboard() {
    const total = livestock.length;
    const available = livestock.filter((l) => l.status === "Available").length;
    const sold = livestock.filter((l) => l.status === "Sold").length;

    return (
        <div>
            <h2>Supplier Dashboard</h2>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                Manage livestock listings and register new animals for export.
            </p>

            {/* Summary Cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginBottom: "2rem",
                }}
            >
                <Card title="Total Livestock">
                    <p>{total}</p>
                </Card>
                <Card title="Available for Export">
                    <p>{available}</p>
                </Card>
                <Card title="Sold Livestock">
                    <p>{sold}</p>
                </Card>
            </div>

            {/* Register New Livestock */}
            <RegisterLivestock />

            {/* Livestock List */}
            <LivestockList />
        </div>
    );
}

export default SupplierDashboard;
