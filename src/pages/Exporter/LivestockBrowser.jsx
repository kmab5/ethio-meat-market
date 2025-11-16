import React from "react";
import livestock from "../../data/livestock";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import { useLanguage } from "../../context/LanguageContext";

function LivestockBrowser() {
    const { language, translations } = useLanguage();
    const available = livestock.filter((item) => item.status === "Available");

    return (
        <Card
            title={
                translations?.[language]?.availableLivestock ||
                "Available Livestock"
            }
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1rem",
                }}
            >
                {available.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundColor: "#fff",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "1rem",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h4>{item.type}</h4>
                        <p>
                            <strong>
                                {translations?.[language]?.breedLabel ||
                                    "Breed:"}
                            </strong>{" "}
                            {item.breed}
                        </p>
                        <p>
                            <strong>
                                {translations?.[language]?.weightLabel ||
                                    "Weight:"}
                            </strong>{" "}
                            {item.weightKg} kg
                        </p>
                        <p>
                            <strong>
                                {translations?.[language]?.healthLabel ||
                                    "Health:"}
                            </strong>{" "}
                            {item.health}
                        </p>
                        <p>
                            <strong>
                                {translations?.[language]?.locationLabel ||
                                    "Location:"}
                            </strong>{" "}
                            {item.location}
                        </p>
                        <Button
                            label={
                                translations?.[language]?.requestOrder ||
                                "Request Order"
                            }
                            type="primary"
                            onClick={() => alert("Dummy: Order request sent!")}
                        />
                    </div>
                ))}
            </div>
        </Card>
    );
}

export default LivestockBrowser;
