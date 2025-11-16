import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import { useLanguage } from "../context/LanguageContext";
import "../styles/form.css";

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
        <div className="form-container">
            <h2>{translations?.[language]?.register || "Register"}</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label className="form-label">
                    {translations?.[language]?.fullName || "Full Name"}
                </label>
                <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder={
                        translations?.[language]?.enterYourName ||
                        "Enter your name"
                    }
                    value={form.name}
                    onChange={handleChange}
                    required
                />

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
                        "Enter a password"
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
                        label={
                            translations?.[language]?.createAccount ||
                            "Create Account"
                        }
                        type="primary"
                        onClick={handleSubmit}
                    />
                </div>
            </form>

            <p className="form-help">
                {translations?.[language]?.alreadyHaveAccount ||
                    "Already have an account?"}{" "}
                <NavLink to="/">
                    {translations?.[language]?.login || "Login"}
                </NavLink>
            </p>
        </div>
    );
}

export default Register;
