import styles from "@/app/page.module.css";
import { Card } from "antd";
const { Meta } = Card;

export default function ImagePreview() {
  return (
    <div className={styles.imagePreview}>
      <Card
        hoverable
        style={{
          width: 200,
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}
