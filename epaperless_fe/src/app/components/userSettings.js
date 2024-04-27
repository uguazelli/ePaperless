import styles from "@/app/page.module.css";
import { UserOutlined } from "@ant-design/icons";

const UserSettings = () => {
  return (
    <div className={styles.userContainer}>
      <UserOutlined />
    </div>
  );
};

export default UserSettings;
