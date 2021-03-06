import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { Enter } from "./Enter";
import { Queue } from "./Queue";
import { CreateTicket } from "./CreateTicket";
import { Desk } from "./Desk";
import { UiContext } from "../context/UIContext";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const { isHideMenu } = useContext(UiContext);
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={isHideMenu}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/enter">Enter</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/queue">Queue</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/create">Create Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/enter" component={Enter} />
              <Route path="/queue" component={Queue} />
              <Route path="/create" component={CreateTicket} />
              <Route path="/desk" component={Desk} />
              <Redirect to="/enter" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
