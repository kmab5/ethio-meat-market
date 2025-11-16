import React from "react";
import styles from "../styles/LanguageToggle.module.css";
import { useLanguage } from "../context/LanguageContext";

function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            type="button"
            className={`${styles.languageToggle} language-toggle`}
            aria-pressed={language === "am"}
            onClick={toggleLanguage}
        >
            {language === "en" ? "🇬🇧 English" : "🇪🇹 አማርኛ"}
        </button>
    );
}

export default LanguageToggle;
