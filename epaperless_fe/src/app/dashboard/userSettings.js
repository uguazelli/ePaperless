import styles from "@/app/page.module.css";
import { UserOutlined } from "@ant-design/icons";

export default function UserSettings() {
  return (
    <div className={styles.userContainer}>
      <UserOutlined />
    </div>
  );
}
