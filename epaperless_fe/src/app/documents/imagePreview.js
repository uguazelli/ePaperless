import styles from "@/app/page.module.css";
import { Card } from "antd";
const { Meta } = Card;

const ImagePreview = ({ object }) => {
  const urlLink = <a href={object.url}>Download</a>;
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
            src={object.thumbnail_url}
            style={{ width: "200px", height: "200px" }}
          />
        }
      >
        <Meta title={object.object_key} description={urlLink} />
      </Card>
    </div>
  );
};

export default ImagePreview;
