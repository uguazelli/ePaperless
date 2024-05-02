import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import ImagePreview from "./imagePreview";
import { MeiliSearch } from "meilisearch";
import { handler } from "@/app/documents/api/s3";

const ImageGrid = () => {
  const client = new MeiliSearch({
    host: "http://localhost:7700",
  });

  const index = client.index("epaperless");

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch("/api/s3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ objectName: "alphabet.png" }),
      });
      const data = await response.json();
      console.log(data.url);
    };

    fetchUrl();
  }, []);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_EPAPERLESS_HOST}/objects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch objects");
        }
        const data = await response.json();
        setObjects(data); // Set the response data in the state
      } catch (error) {
        console.error("Error fetching objects:", error);
      }
    };

    fetchObjects();
  }, []);

  // useEffect(() => {
  //   const fetchTask = async () => {
  //     try {
  //       const task = await client.getTask(0);
  //       const results = await index.search("", {
  //         limit: 10,
  //         offset: 0,
  //       });

  //       // console.log(results);

  //       // console.log(task);
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   };

  //   fetchTask();

  //   // Cleanup function
  //   return () => {
  //     // Any cleanup code if needed
  //   };
  // }, []);

  return (
    <div className={styles.imageGrid}>
      {objects.map((object, index) => (
        <ImagePreview key={index} object={object} />
      ))}
    </div>
  );
};

export default ImageGrid;
