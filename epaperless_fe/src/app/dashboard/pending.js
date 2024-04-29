import React from "react";
import { Button, Col, Row, Statistic } from "antd";
import { Card, Space } from "antd";
const Pending = () => (
  <Card
    title="Small size card"
    style={{
      width: "100%",
    }}
  >
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Action needed" value={22} />
      </Col>
      <Col span={12}>
        <Statistic title="Files overdue" value={32} />
        <Button
          style={{
            marginTop: 16,
          }}
          type="primary"
        >
          Recharge
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Files needing action" value={112893} loading />
      </Col>
    </Row>
  </Card>
);
export default Pending;
