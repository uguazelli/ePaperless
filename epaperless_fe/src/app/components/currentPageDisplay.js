import { HomeOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "@/app/page.module.css";
import useStore from "@/app/store";

const CurrentPageDisplay = ({ toogleMenu }) => {
  const currentPage = useStore((state) => state.currentPage);

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
