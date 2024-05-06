import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ToogleLanguage = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [isDropdownActive, setIsDropdownActive] = useState(false); // State to track dropdown visibility

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownActive(false); // Close dropdown when language is changed
  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive); // Toggle dropdown visibility
  };

  return (
    <div className="lang-switcher-wrapper">
      <button
        className="lang-switcher transparent-btn"
        type="button"
        onClick={toggleDropdown}
      >
        {selectedLanguage.toUpperCase()}
        <i data-feather="chevron-down" aria-hidden="true" />
      </button>
      <ul className={`lang-menu dropdown ${isDropdownActive ? "active" : ""}`}>
        <li>
          <a href="" onClick={() => handleLanguageChange("en")}>
            English
          </a>
        </li>
        <li>
          <a href="" onClick={() => handleLanguageChange("es")}>
            Español
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ToogleLanguage;
