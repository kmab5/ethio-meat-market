import React, { useState } from "react";

function LanguageToggle() {
    const [lang, setLang] = useState("en");

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "am" : "en"));
    };

    return (
        <button className="lang-toggle" onClick={toggleLang}>
            {lang === "en" ? "🇬🇧 English" : "🇪🇹 አማርኛ"}
        </button>
    );
}

export default LanguageToggle;
