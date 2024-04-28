import React from "react";
import dynamic from "next/dynamic";
import "react-tiny-fab/dist/styles.css";
import { PlusOutlined } from "@ant-design/icons";
import { FileAddOutlined } from "@ant-design/icons";
import Link from "next/link";

// Use dynamic import for Fab and Action components with ssr: false, this will avoid ReferenceError: window is not defined
const Fab = dynamic(() => import("react-tiny-fab").then((mod) => mod.Fab), {
  ssr: false,
});
const Action = dynamic(
  () => import("react-tiny-fab").then((mod) => mod.Action),
  {
    ssr: false,
  }
);

// Define FloatButton component
const FloatButton = () => {
  // Define styles
  const styles = {
    mainButtonStyles: {
      backgroundColor: "purple",
      borderRadius: 48,
    },
    actionButtonStyles: {
      backgroundColor: "purple",
      color: "#27ae60",
    },
    mainStyle: { bottom: 0, right: 60 },
    actionStyle: {
      backgroundColor: "green",
      borderRadius: 48,
    },
  };

  // Render the FloatButton component
  return (
    <Fab
      mainButtonStyles={styles.mainButtonStyles}
      style={styles.mainStyle}
      icon={<PlusOutlined />}
      event={"hover"}
      alwaysShowTitle={true}
    >
      <Action text="Add Documents" style={styles.actionStyle}>
        <Link href="/uploads">
          <FileAddOutlined />
        </Link>
      </Action>
    </Fab>
  );
};

export default FloatButton; // Export FloatButton component
