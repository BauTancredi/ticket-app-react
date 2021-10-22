import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";

import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";

const { Title, Text } = Typography;

export const Enter = () => {
  const history = useHistory();
  const [user] = useState(getUserStorage());
  useHideMenu(false);

  const onFinish = ({ agent, desk }) => {
    localStorage.setItem("agent", agent);
    localStorage.setItem("desk", desk);
    history.push("/desk");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (user.agent && user.desk) {
    return <Redirect to="/desk" />;
  }

  return (
    <>
      <Title level={2}>Enter</Title>
      <Text>Enter your name and desk number</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="agent"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Desk"
          name="desk"
          rules={[
            {
              required: true,
              message: "Please input your desk number!",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Enter
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
