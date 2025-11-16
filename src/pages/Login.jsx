import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useLanguage } from "../context/LanguageContext";

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

    const { language, translations } = useLanguage();

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
                {translations?.[language]?.login || "Login"}
            </h2>
            <form onSubmit={handleSubmit}>
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
                        "Enter your password"
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
                    label={translations?.[language]?.login || "Login"}
                    type="primary"
                    onClick={handleSubmit}
                />
            </form>

            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                {translations?.[language]?.dontHaveAccount ||
                    "Don’t have an account?"}{" "}
                <a href="/register">
                    {translations?.[language]?.register || "Register"}
                </a>
            </p>
        </div>
    );
}

export default Login;
