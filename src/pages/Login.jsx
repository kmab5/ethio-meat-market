import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useLanguage } from "../context/LanguageContext";
import "../styles/form.css";

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
        <div className="form-container">
            <h2>{translations?.[language]?.login || "Login"}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label className="form-label">
                    {translations?.[language]?.email || "Email"}
                </label>
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder={
                        translations?.[language]?.enterYourEmail ||
                        "Enter your email"
                    }
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label className="form-label">
                    {translations?.[language]?.password || "Password"}
                </label>
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder={
                        translations?.[language]?.enterYourPassword ||
                        "Enter your password"
                    }
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                <label className="form-label">
                    {translations?.[language]?.role || "Role"}
                </label>
                <select
                    className="form-select"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
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

                <div className="form-actions">
                    <Button
                        label={translations?.[language]?.login || "Login"}
                        type="primary"
                        onClick={handleSubmit}
                    />
                </div>
            </form>

            <p className="form-help">
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
