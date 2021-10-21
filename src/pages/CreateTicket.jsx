import React from "react";
import { Col, Row, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";

const { Title, Text } = Typography;

export const CreateTicket = () => {
  useHideMenu(true);
  const newTicket = () => {};

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}> Click the button for a new ticket</Title>
          <Button
            shape="round"
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >
            New Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Your number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
