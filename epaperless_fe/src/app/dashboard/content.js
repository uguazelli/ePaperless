import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import Pending from "@/app/dashboard/pending";
import React from "react";
import { Card, Space } from "antd";

const Content = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Pending />
    <Card
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);
export default Content;
