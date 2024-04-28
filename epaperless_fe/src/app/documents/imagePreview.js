import styles from "@/app/page.module.css";
import { Card } from "antd";
const { Meta } = Card;

const ImagePreview = ({ object }) => {
  const urlLink = <a href={object.url}>open</a>;
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
        <Meta title={object.object_key} description={urlLink} />
      </Card>
    </div>
  );
};

export default ImagePreview;
