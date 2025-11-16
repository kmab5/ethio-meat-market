import React, { useState } from "react";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/form.css";

function RegisterLivestock() {
    const { language, translations } = useLanguage();
    const t = translations?.[language] || {};

    const [form, setForm] = useState({
        type: "",
        breed: "",
        weightKg: "",
        health: "",
        location: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            t.livestockRegistered ||
                "Livestock registered successfully! (dummy)"
        );
        setForm({
            type: "",
            breed: "",
            weightKg: "",
            health: "",
            location: "",
        });
    };

    return (
        <Card title={t.registerNewLivestock || "Register New Livestock"}>
            <form
                className="form"
                onSubmit={handleSubmit}
                style={{ marginTop: "10px" }}
            >
                <div className="form-grid">
                    <div>
                        <label className="form-label">{t.type || "Type"}</label>
                        <input
                            className="form-input"
                            type="text"
                            name="type"
                            placeholder={t.typePlaceholder || "e.g., Cattle"}
                            value={form.type}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">
                            {t.breed || "Breed"}
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="breed"
                            placeholder={t.breedPlaceholder || "e.g., Boran"}
                            value={form.breed}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">
                            {t.weightKg || "Weight (kg)"}
                        </label>
                        <input
                            className="form-input"
                            type="number"
                            name="weightKg"
                            placeholder={t.weightPlaceholder || "e.g., 400"}
                            value={form.weightKg}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">
                            {t.healthCondition || "Health Condition"}
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="health"
                            placeholder={t.healthPlaceholder || "e.g., Good"}
                            value={form.health}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label">
                            {t.location || "Location"}
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            name="location"
                            placeholder={t.locationPlaceholder || "e.g., Adama"}
                            value={form.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <Button
                        label={t.submit || "Submit"}
                        type="primary"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
        </Card>
    );
}

export default RegisterLivestock;
