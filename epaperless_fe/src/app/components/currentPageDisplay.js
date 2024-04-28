import { HomeOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "@/app/page.module.css";

const CurrentPageDisplay = ({ toogleMenu }) => {
  let currentPage = "";

  if (typeof window !== "undefined") {
    const pathParts = window.location.pathname.split("/");
    currentPage = pathParts[pathParts.length - 1];
  }

  return (
    <div>
      <span className={styles.mobileMenu} onClick={toogleMenu}>
        <MenuUnfoldOutlined />
      </span>
      <div className={styles.hiddenOnMobile}>
        <a href="/dashboard">
          <HomeOutlined />
        </a>
        <span> / {currentPage.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default CurrentPageDisplay;
