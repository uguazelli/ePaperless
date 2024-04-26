"use client";

import React, { useState } from "react";
import styles from "@/app/page.module.css";
import LeftMenu from "./leftMenu";
import SearchMenu from "./searchMenu";
import UserSettings from "./userSettings";
import ImageGrid from "./imageGrid";
import CurrentPageDisplay from "./currentPageDisplay";

export default function Dashboard() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const toogleMenu = () => setShowMobileMenu(!showMobileMenu);
  return (
    <div className={styles.main}>
      <div
        className={showMobileMenu ? styles.showOnMobile : styles.hiddenOnMobile}
      >
        <LeftMenu toogleMenu={toogleMenu} />
      </div>

      <div>
        <div className={styles.content}>
          <CurrentPageDisplay toogleMenu={toogleMenu} />
          <SearchMenu />
          <UserSettings />
        </div>
        <ImageGrid />
      </div>
    </div>
  );
}
