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

const Navbar = () => {
  const { toggleSidebar } = useStore();
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
    <nav className="main-nav--bg">
      <div className="container main-nav">
        <div className="main-nav-start">
          <div className="search-wrapper">
            <i data-feather="search" aria-hidden="true" />
            <input type="text" placeholder="Enter keywords ..." required />
          </div>
        </div>
        <div className="main-nav-end">
          <button
            className="sidebar-toggle transparent-btn"
            title="Menu"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="icon menu-toggle--gray" aria-hidden="true" />
          </button>
          <div className="lang-switcher-wrapper">
            <button className="lang-switcher transparent-btn" type="button">
              EN
              <i data-feather="chevron-down" aria-hidden="true" />
            </button>
            <ul className="lang-menu dropdown">
              <li>
                <a href="##">English</a>
              </li>
              <li>
                <a href="##">French</a>
              </li>
              <li>
                <a href="##">Uzbek</a>
              </li>
            </ul>
          </div>
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
          <div className="notification-wrapper">
            <button
              className="gray-circle-btn dropdown-btn"
              title="To messages"
              type="button"
            >
              <span className="sr-only">To messages</span>
              <span className="icon notification active" aria-hidden="true" />
            </button>
            <ul className="users-item-dropdown notification-dropdown dropdown">
              <li>
                <a href="##">
                  <div className="notification-dropdown-icon info">
                    <i data-feather="check" />
                  </div>
                  <div className="notification-dropdown-text">
                    <span className="notification-dropdown__title">
                      System just updated
                    </span>
                    <span className="notification-dropdown__subtitle">
                      The system has been successfully upgraded. Read more here.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="##">
                  <div className="notification-dropdown-icon danger">
                    <i data-feather="info" aria-hidden="true" />
                  </div>
                  <div className="notification-dropdown-text">
                    <span className="notification-dropdown__title">
                      The cache is full!
                    </span>
                    <span className="notification-dropdown__subtitle">
                      Unnecessary caches take up a lot of memory space and
                      interfere ...
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="##">
                  <div className="notification-dropdown-icon info">
                    <i data-feather="check" aria-hidden="true" />
                  </div>
                  <div className="notification-dropdown-text">
                    <span className="notification-dropdown__title">
                      New Subscriber here!
                    </span>
                    <span className="notification-dropdown__subtitle">
                      A new subscriber has subscribed.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a className="link-to-page" href="##">
                  Go to Notifications page
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-user-wrapper">
            <button
              href="##"
              className="nav-user-btn dropdown-btn"
              title="My profile"
              type="button"
            >
              <span className="sr-only">My profile</span>
              <span className="nav-user-img">
                <picture>
                  <source
                    srcSet="./img/avatar/avatar-illustrated-02.webp"
                    type="image/webp"
                  />
                  <img
                    src="./img/avatar/avatar-illustrated-02.png"
                    alt="User name"
                  />
                </picture>
              </span>
            </button>
            <ul className="users-item-dropdown nav-user-dropdown dropdown">
              <li>
                <a href="##">
                  <i data-feather="user" aria-hidden="true" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="##">
                  <i data-feather="settings" aria-hidden="true" />
                  <span>Account settings</span>
                </a>
              </li>
              <li>
                <a className="danger" href="##">
                  <i data-feather="log-out" aria-hidden="true" />
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
