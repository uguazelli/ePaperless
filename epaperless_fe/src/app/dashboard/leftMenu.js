import styles from "@/app/page.module.css";
import { Card } from "antd";
import { RobotOutlined, CloseCircleFilled } from "@ant-design/icons";

export default function LeftMenu({ toogleMenu }) {
  const url = "doc";

  const Header = (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ color: "white", fontSize: "1.5rem" }}>
        <RobotOutlined /> ePaperless
      </span>
      <CloseCircleFilled className={styles.closeMenu} onClick={toogleMenu} />
    </div>
  );

  return (
    <Card
      className={styles.cardMenu}
      title={Header}
      bordered={false}
      style={{ width: 300, fontSize: "1rem" }}
    >
      <div className={styles.menuItemsContainer}>
        <div className={url == "dash" ? styles.activated : styles.menuItem}>
          <p>Dashboard</p>
        </div>

        <div className={url == "doc" ? styles.activated : styles.menuItem}>
          <p>Documents</p>
        </div>

        <div
          className={url == "set" ? styles.setActivated : styles.settingMenu}
        >
          <p>Settings</p>
        </div>
      </div>
    </Card>
  );
}
