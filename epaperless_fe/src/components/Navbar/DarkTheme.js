import React, { useEffect } from "react";
import useStore from "@/store";

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-moon moon-icon"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-sun sun-icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const DarkTheme = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("darkmode");
    } else {
      body.classList.remove("darkmode");
    }
  }, [isDarkMode]);

  // Load dark mode state from localStorage on mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      if (storedDarkMode === "true") {
        useStore.getState().toggleDarkMode();
      }
    }
  }, []);

  // Save dark mode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <button
      className="theme-switcher gray-circle-btn"
      type="button"
      title="Switch theme"
      onClick={toggleDarkMode}
    >
      <span className="sr-only">Switch theme</span>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}

      <i className="sun-icon" data-feather="sun" aria-hidden="true" />
      <i className="moon-icon" data-feather="moon" aria-hidden="true" />
    </button>
  );
};

export default DarkTheme;
