import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useLanguage } from "../context/LanguageContext";

function Register() {
    const navigate = useNavigate();
    const { language, translations } = useLanguage();
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
                {translations?.[language]?.register || "Register"}
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    {translations?.[language]?.fullName || "Full Name"}
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder={
                        translations?.[language]?.enterYourName ||
                        "Enter your name"
                    }
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        padding: "8px",
                    }}
                />

                <label>{translations?.[language]?.email || "Email"}</label>
                <input
                    type="email"
                    name="email"
                    placeholder={
                        translations?.[language]?.enterYourEmail ||
                        "Enter your email"
                    }
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        padding: "8px",
                    }}
                />

                <label>
                    {translations?.[language]?.password || "Password"}
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder={
                        translations?.[language]?.enterYourPassword ||
                        "Enter a password"
                    }
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        marginBottom: "1rem",
                        padding: "8px",
                    }}
                />

                <label>{translations?.[language]?.role || "Role"}</label>
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
                    <option>
                        {translations?.[language]?.supplier || "Supplier"}
                    </option>
                    <option>
                        {translations?.[language]?.exporter || "Exporter"}
                    </option>
                    <option>
                        {translations?.[language]?.abattoir || "Abattoir"}
                    </option>
                    <option>
                        {translations?.[language]?.airline || "Airline"}
                    </option>
                    <option>
                        {translations?.[language]?.regulator || "Regulator"}
                    </option>
                </select>

                <Button
                    label={
                        translations?.[language]?.createAccount ||
                        "Create Account"
                    }
                    type="primary"
                    onClick={handleSubmit}
                />
            </form>

            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                {translations?.[language]?.alreadyHaveAccount ||
                    "Already have an account?"}{" "}
                <a href="/">{translations?.[language]?.login || "Login"}</a>
            </p>
        </div>
    );
}

export default Register;
