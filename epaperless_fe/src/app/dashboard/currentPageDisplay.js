import { HomeOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "@/app/page.module.css";

export default function CurrentPageDisplay({ toogleMenu }) {
  return (
    <div>
      <span className={styles.mobileMenu} onClick={toogleMenu}>
        <MenuUnfoldOutlined />
      </span>
      <div className={styles.hiddenOnMobile}>
        <HomeOutlined /> / Dashboard
      </div>
    </div>
  );
}
