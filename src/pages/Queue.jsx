import React, { useContext, useState, useEffect } from "react";
import { Col, Row, Typography, List, Card, Tag, Divider } from "antd";

import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";
import { getLast } from "../helpers/getLast";

const { Title, Text } = Typography;

export const Queue = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-assigned", (assigned) => {
      setTickets(assigned);
    });

    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  useEffect(() => {
    getLast().then((tickets) => setTickets(tickets));
  }, []);

  return (
    <>
      <Title level={1}>Serving the customer</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent} </Tag>,
                    <Tag color="magenta">Desk: {item.desk} </Tag>,
                  ]}
                >
                  <Title>Num. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider> History </Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket Num ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">In desk: </Text>
                      <Tag color="magenta"> {item.desk} </Tag>
                      <Text type="secondary">Agent: </Text>
                      <Tag color="volcano"> {item.agent} </Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
