import React from "react";
import useStore from "@/store";

const ToogleMenu = () => {
  const { toggleSidebar } = useStore();

  return (
    <button
      className="sidebar-toggle transparent-btn"
      title="Menu"
      type="button"
      onClick={toggleSidebar}
    >
      <span className="sr-only">Toggle menu</span>
      <span className="icon menu-toggle--gray" aria-hidden="true" />
    </button>
  );
};

export default ToogleMenu;
