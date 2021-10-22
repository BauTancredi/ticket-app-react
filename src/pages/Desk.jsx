import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Button, Col, Divider, Row, Typography } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";
import { SocketContext } from "../context/SocketContext";

const { Title, Text } = Typography;

export const Desk = () => {
  useHideMenu(false);
  const history = useHistory();
  const { socket } = useContext(SocketContext);
  const [user] = useState(getUserStorage());
  const [ticket, setTicket] = useState(null);

  const exit = () => {
    localStorage.clear();
    history.replace("/enter");
  };

  const nextTicket = () => {
    socket.emit("next-ticket", user, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!user.agent || !user.desk) {
    return <Redirect to="/enter" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working in the desk: </Text>
          <Text type="success">{user.desk}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={exit}>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text>You are working with ticket number: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
