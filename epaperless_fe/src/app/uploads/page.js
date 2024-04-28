"use client";

import Layout from "@/app/components/layout";
import DragAndDrop from "@/app/uploads/fileUploader";

const FileUpload = () => {
  const workspace = (
    <div style={{ height: "20rem" }}>
      <DragAndDrop />
    </div>
  );
  return <Layout workspace={workspace} />;
};

export default FileUpload;
