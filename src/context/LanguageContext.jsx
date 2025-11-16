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
            dashboardOverview: "Dashboard Overview",
            livestock: "Livestock",
            supplier: "Supplier",
            exporter: "Exporter",
            abattoir: "Abattoir",
            airline: "Airline",
            regulator: "Regulator",
            notifications: "Notifications",
            navigation: "Navigation",
            totalLivestock: "Total Livestock",
            availableForExport: "Available for Export",
            approvedExports: "Approved Exports",
            pendingApprovals: "Pending Approvals",
            app: "Ethio Meat Market",
        },
        am: {
            welcome: "እንኳን ደህና መጡ ወደ EthioMeatApp",
            dashboard: "ዳሽቦርድ",
            dashboardOverview: "ዳሽቦርድ እይታ",
            livestock: "እንስሳት",
            supplier: "አቅራቢ",
            exporter: "ኤክስፖርተር",
            abattoir: "እርድ ቤት",
            airline: "አየር መንገድ",
            regulator: "ቁጥጥር ባለስልጣን",
            notifications: "ማስታወቂያዎች",
            navigation: "አሰሳ",
            totalLivestock: "ጠቅላላ እንስሳት",
            availableForExport: "ለላክ የሚገኙ",
            approvedExports: "የተፈቀዱ ላክዎች",
            pendingApprovals: "የሚጠበቁ ፈቃዶች",
            app: "ኢትዮ ስጋ ገበያ",
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
