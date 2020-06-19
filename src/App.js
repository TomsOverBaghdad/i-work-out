import React from 'react';
// import {
//   Form,
//   Select,
//   InputNumber,
//   DatePicker,
//   Switch,
//   Slider,
//   Button,
//   Rate,
//   Typography,
//   Space,
//   Divider,
// } from 'antd';

// const { Option } = Select;
// const { Title } = Typography;

// const App = () => (
//   <React.Fragment>
//     <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
//       <Space align="start">
//         <img
//           style={{width: 40, height: 40 }}
//           src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
//           alt="Ant Design"
//         />
//         <Title level={2} style={{ marginBottom: 0 }}>
//           Ant Design
//         </Title>
//       </Space>
//     </section>
//     <Divider style={{ marginBottom: 60 }}>Form</Divider>
//     <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
//       <Form.Item label="数字输入框">
//         <InputNumber min={1} max={10} defaultValue={3} />
//         <span className="ant-form-text"> 台机器</span>
//         <a href="https://ant.design">链接文字</a>
//       </Form.Item>
//       <Form.Item label="开关">
//         <Switch defaultChecked />
//       </Form.Item>
//       <Form.Item label="滑动输入条">
//         <Slider defaultValue={70} />
//       </Form.Item>
//       <Form.Item label="选择器">
//         <Select defaultValue="lucy" style={{ width: 192 }}>
//           <Option value="jack">jack</Option>
//           <Option value="lucy">lucy</Option>
//           <Option value="disabled" disabled>disabled</Option>
//           <Option value="yiminghe">yiminghe</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item label="日期选择框">
//         <DatePicker />
//       </Form.Item>
//       <Form.Item label="日期范围选择框">
//         <DatePicker.RangePicker />
//       </Form.Item>
//       <Form.Item label="评分">
//         <Rate defaultValue={5} />
//       </Form.Item>
//       <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
//         <Space>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//           <Button>
//             Cancel
//           </Button>
//         </Space>
//       </Form.Item>
//     </Form>
//   </React.Fragment>
// );



import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './App.less';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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
        {/*<Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>*/}
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </React.Fragment>
);

export default App;
