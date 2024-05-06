import React from "react";
import useStore from "@/store";

const Header = () => {
  const { toggleSidebar } = useStore();
  return (
    <div className="sidebar-head">
      <a href="/" className="logo-wrapper" title="Home">
        <span className="sr-only">Home</span>
        <span className="icon logo" aria-hidden="true" />
        <div className="logo-text">
          <span className="logo-title">Elegant</span>
          <span className="logo-subtitle">Dashboard</span>
        </div>
      </a>
      <button
        className="sidebar-toggle transparent-btn"
        title="Menu"
        type="button"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Toggle menu</span>
        <span className="icon menu-toggle" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Header;
