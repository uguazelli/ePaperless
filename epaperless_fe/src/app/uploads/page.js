"use client";

import Layout from "@/app/components/layout";
import DragAndDrop from "./draggerPage";

const Documents = () => {
  const workspace = (
    <div style={{ height: "20rem" }}>
      <DragAndDrop />
    </div>
  );
  return <Layout workspace={workspace} />;
};

export default Documents;
