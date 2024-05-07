import { Dropzone, FileMosaic } from "@files-ui/react";
import useStore from "@/store";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FilesDropZone() {
  const { t } = useTranslation();
  const {
    EPAPERLESS_API_KEY,
    EPAPERLESS_BASE_URL,
    EPAPERLESS_UPLOAD_URL,
    sin,
    tags,
    meta,
  } = useStore();

  const [files, setFiles] = useState([]);

  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const uploadFiles = async () => {
    const formData = new FormData();

    files.forEach((fileObj) => {
      // Change the filename
      let filename = `@@SIN=${sin}`;
      filename += `~TAGS=${tags.replace(/\s+/g, "")}`;
      filename += `~METADATA={${meta.replace(/\s+/g, "")}}`;
      filename += `~FILENAME=${fileObj.name}`;

      const file = new File([fileObj.path], filename, {
        type: "application/octet-stream",
      });
      formData.append("files", file);
    });

    try {
      const response = await fetch(
        `${EPAPERLESS_BASE_URL}${EPAPERLESS_UPLOAD_URL}`,
        {
          method: "POST",
          headers: {
            "X-API-Key": EPAPERLESS_API_KEY,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Upload successful:", data);
      setFiles([]); // Assuming removeFile exists
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Dropzone
      color="#6200EE"
      background="radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);"
      onChange={updateFiles}
      value={files}
      style={{ height: "20rem" }}
      // label={"Click or drop the files here ❤️"}
      label={t("dropzoneMessage")}
      actionButtons={{
        position: "after",
        abortButton: {},
        deleteButton: {},
        uploadButton: { onClick: uploadFiles },
      }}
    >
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
      ))}
    </Dropzone>
  );
}
