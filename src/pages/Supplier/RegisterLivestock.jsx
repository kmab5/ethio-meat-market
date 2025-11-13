import React, { useState } from "react";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

function RegisterLivestock() {
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
        alert("Livestock registered successfully! (dummy)");
        setForm({
            type: "",
            breed: "",
            weightKg: "",
            health: "",
            location: "",
        });
    };

    return (
        <Card title="Register New Livestock">
            <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1rem",
                        marginBottom: "1rem",
                    }}
                >
                    <div>
                        <label>Type</label>
                        <input
                            type="text"
                            name="type"
                            placeholder="e.g., Cattle"
                            value={form.type}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                            }}
                        />
                    </div>

                    <div>
                        <label>Breed</label>
                        <input
                            type="text"
                            name="breed"
                            placeholder="e.g., Boran"
                            value={form.breed}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                            }}
                        />
                    </div>

                    <div>
                        <label>Weight (kg)</label>
                        <input
                            type="number"
                            name="weightKg"
                            placeholder="e.g., 400"
                            value={form.weightKg}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                            }}
                        />
                    </div>

                    <div>
                        <label>Health Condition</label>
                        <input
                            type="text"
                            name="health"
                            placeholder="e.g., Good"
                            value={form.health}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                            }}
                        />
                    </div>

                    <div>
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="e.g., Adama"
                            value={form.location}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                            }}
                        />
                    </div>
                </div>

                <Button label="Submit" type="primary" onClick={handleSubmit} />
            </form>
        </Card>
    );
}

export default RegisterLivestock;
