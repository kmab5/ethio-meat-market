import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "Supplier",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For demo only — no authentication logic
        navigate("/dashboard");
    };

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "5rem auto",
                padding: "2rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Login
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        padding: "8px",
                    }}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        padding: "8px",
                    }}
                />

                <label>Role</label>
                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        marginBottom: "1.5rem",
                        padding: "8px",
                    }}
                >
                    <option>Supplier</option>
                    <option>Exporter</option>
                    <option>Abattoir</option>
                    <option>Airline</option>
                    <option>Regulator</option>
                </select>

                <Button label="Login" type="primary" onClick={handleSubmit} />
            </form>

            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Don’t have an account? <a href="/register">Register</a>
            </p>
        </div>
    );
}

export default Login;
