import React from "react";
import Card from "../../components/UI/Card";
import LivestockBrowser from "./LivestockBrowser";
import Orders from "./Orders";
import livestock from "../../data/livestock";
import orders from "../../data/orders";

function ExporterDashboard() {
    const totalListings = livestock.length;
    const pendingOrders = orders.filter((o) => o.status === "Pending").length;
    const approvedOrders = orders.filter((o) => o.status === "Approved").length;

    return (
        <div>
            <h2>Exporter Dashboard</h2>
            <p style={{ color: "#555", marginBottom: "1.5rem" }}>
                Browse available livestock and manage export orders.
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
                <Card title="Total Livestock Listings">
                    <p>{totalListings}</p>
                </Card>
                <Card title="Pending Orders">
                    <p>{pendingOrders}</p>
                </Card>
                <Card title="Approved Orders">
                    <p>{approvedOrders}</p>
                </Card>
            </div>

            {/* Browse Livestock */}
            <LivestockBrowser />

            {/* Orders */}
            <Orders />
        </div>
    );
}

export default ExporterDashboard;
