import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

import SupplierDashboard from "../pages/Supplier/SupplierDashboard";
import ExporterDashboard from "../pages/Exporter/ExporterDashboard";
import AbattoirDashboard from "../pages/Abattoir/AbattoirDashboard";
import AirlineDashboard from "../pages/Airline/AirlineDashboard";
import RegulatorDashboard from "../pages/Regulator/RegulatorDashboard";

function AppRoutes() {
    return (
        <Routes>
            {/* Authentication */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Main Dashboards */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/supplier" element={<SupplierDashboard />} />
            <Route path="/exporter" element={<ExporterDashboard />} />
            <Route path="/abattoir" element={<AbattoirDashboard />} />
            <Route path="/airline" element={<AirlineDashboard />} />
            <Route path="/regulator" element={<RegulatorDashboard />} />
        </Routes>
    );
}

export default AppRoutes;
