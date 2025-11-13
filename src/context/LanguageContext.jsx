import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "am" : "en"));
    };

    const translations = {
        en: {
            welcome: "Welcome to EthioMeatApp",
            dashboard: "Dashboard",
            livestock: "Livestock",
            supplier: "Supplier",
            exporter: "Exporter",
            regulator: "Regulator",
            notifications: "Notifications",
        },
        am: {
            welcome: "እንኳን ደህና መጡ ወደ EthioMeatApp",
            dashboard: "ዳሽቦርድ",
            livestock: "እንስሳት",
            supplier: "አቅራቢ",
            exporter: "ኤክስፖርተር",
            regulator: "ቁጥጥር ባለስልጣን",
            notifications: "ማስታወቂያዎች",
        },
    };

    return (
        <LanguageContext.Provider
            value={{ language, toggleLanguage, translations }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
