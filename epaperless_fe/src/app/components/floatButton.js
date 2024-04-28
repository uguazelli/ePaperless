"use client";
import "react-tiny-fab/dist/styles.css";
import { Fab, Action } from "react-tiny-fab";
import { PlusOutlined } from "@ant-design/icons";
import { FileAddOutlined } from "@ant-design/icons";
import Link from "next/link";

const FloatButton = () => {
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

export default FloatButton;
