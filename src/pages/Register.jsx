import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "Supplier",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In dummy version, just redirect to login
        navigate("/");
    };

    return (
        <div
            style={{
                maxWidth: "450px",
                margin: "5rem auto",
                padding: "2rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        padding: "8px",
                    }}
                />

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
                    placeholder="Enter a password"
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

                <Button
                    label="Create Account"
                    type="primary"
                    onClick={handleSubmit}
                />
            </form>

            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Already have an account? <a href="/">Login</a>
            </p>
        </div>
    );
}

export default Register;
