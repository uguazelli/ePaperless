"use client";

import React, { useState } from "react";
import styles from "@/app/page.module.css";
import LeftMenu from "@/app/components/leftMenu";
import SearchMenu from "@/app/components/searchMenu";
import UserSettings from "@/app/components/userSettings";
import CurrentPageDisplay from "@/app/components/currentPageDisplay";
import FloatButton from "@/app/components/floatButton";

const Layout = ({ workspace }) => {
  const [mobile, setMobile] = useState(false);
  const toogleMenu = () => setMobile(!mobile);
  return (
    <div>
      {/* Left side menu */}
      <div className={styles.main}>
        <div className={mobile ? styles.showOnMobile : styles.hiddenOnMobile}>
          <LeftMenu toogleMenu={toogleMenu} />
        </div>
        {/* Main area */}
        <div>
          <div className={styles.content}>
            <CurrentPageDisplay toogleMenu={toogleMenu} />
            <SearchMenu />
            <UserSettings />
          </div>
          {workspace}
        </div>
      </div>

      <FloatButton />
    </div>
  );
};

export default Layout;
