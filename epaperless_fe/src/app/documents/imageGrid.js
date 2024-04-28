import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import ImagePreview from "./imagePreview";

const ImageGrid = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/objects");
        if (!response.ok) {
          throw new Error("Failed to fetch objects");
        }
        const data = await response.json();
        setObjects(data); // Set the response data in the state
        console.log(data);
      } catch (error) {
        console.error("Error fetching objects:", error);
      }
    };

    fetchObjects();
  }, []);

  return (
    <div className={styles.imageGrid}>
      {objects.map((object, index) => (
        <ImagePreview key={index} object={object} />
      ))}
    </div>
  );
};

export default ImageGrid;
