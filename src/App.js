import React from 'react';
import { Layout, Menu, Calendar, Divider, Row, Col } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { WorkoutCalendar } from './components/WorkoutCalendar';
import './App.less';

const { SubMenu } = Menu;
const { Header, Content } = Layout;

const App = () => (
  <React.Fragment>
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        {/*<Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <WorkoutCalendar />
          </Content>
        </Layout>*/}
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <WorkoutCalendar />
            <Divider />
            <WorkoutCalendar style={{ maxHeight: 700 }} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  </React.Fragment>
);

export default App;
