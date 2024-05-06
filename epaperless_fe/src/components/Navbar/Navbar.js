import React from "react";

import Search from "./Search";
import ToogleMenu from "./ToogleMenu";
import ToogleLanguage from "./ToogleLanguage";
import DarkTheme from "./DarkTheme";
import Notification from "./Notification";
import User from "./User";

const Navbar = () => {
  return (
    <nav className="main-nav--bg">
      <div className="container main-nav">
        <Search />
        <div className="main-nav-end">
          <ToogleMenu />
          <ToogleLanguage />
          <DarkTheme />
          <Notification />
          <User />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
