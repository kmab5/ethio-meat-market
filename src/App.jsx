import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import SupplierDashboard from "./pages/Supplier/SupplierDashboard";
import ExporterDashboard from "./pages/Exporter/ExporterDashboard";
import AbattoirDashboard from "./pages/Abattoir/AbattoirDashboard";
import AirlineDashboard from "./pages/Airline/AirlineDashboard";
import RegulatorDashboard from "./pages/Regulator/RegulatorDashboard";

import "./index.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="main-content">
                    <Sidebar />
                    <div className="page-content">
                        <Routes>
                            {/* Authentication */}
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />

                            {/* Dashboards */}
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route
                                path="/supplier"
                                element={<SupplierDashboard />}
                            />
                            <Route
                                path="/exporter"
                                element={<ExporterDashboard />}
                            />
                            <Route
                                path="/abattoir"
                                element={<AbattoirDashboard />}
                            />
                            <Route
                                path="/airline"
                                element={<AirlineDashboard />}
                            />
                            <Route
                                path="/regulator"
                                element={<RegulatorDashboard />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
