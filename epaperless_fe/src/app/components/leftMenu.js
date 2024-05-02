import styles from "@/app/page.module.css";
import { Card } from "antd";
import { RobotOutlined, CloseCircleFilled } from "@ant-design/icons";
import useStore from "@/app/store";

const LeftMenu = ({ toogleMenu }) => {
  const currentPage = useStore((state) => state.currentPage);

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
        <a
          href="/dashboard"
          className={
            currentPage == "dashboard" ? styles.activated : styles.menuItem
          }
        >
          <p>Dashboard</p>
        </a>

        <a
          href="/documents"
          className={
            currentPage == "documents" ? styles.activated : styles.menuItem
          }
        >
          <p>Documents</p>
        </a>

        <a
          href="/settings"
          className={
            currentPage == "settings" ? styles.setActivated : styles.settingMenu
          }
        >
          <p>Settings</p>
        </a>
      </div>
    </Card>
  );
};

export default LeftMenu;
