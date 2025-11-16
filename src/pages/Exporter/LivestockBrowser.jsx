import React from "react";
import livestock from "../../data/livestock";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import "./LivestockBrowser.css";
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
            <div className="livestock-grid">
                {available.map((item) => (
                    <div key={item.id} className="livestock-card">
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
                        <div className="actions">
                            <Button
                                label={
                                    translations?.[language]?.requestOrder ||
                                    "Request Order"
                                }
                                type="primary"
                                onClick={() =>
                                    alert("Dummy: Order request sent!")
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export default LivestockBrowser;
