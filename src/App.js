import React from 'react';

import { Layout, Menu, Divider, Space } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faRunning, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

import { WorkoutCalendar } from './components/WorkoutCalendar';
import { WorkoutTotals } from './components/WorkoutTotals';

import './App.less';

// TEST IMPORTS
import { generateTestWorkouts } from './testData';
//


// add to library to use as strings instead of objects
// remove 'fa' and hyphenate instead of camel case
// <FontAwesomeIcon icon='dumbbell' />
library.add(faDumbbell, faRunning, faPeopleCarry);


const { Header, Content } = Layout;

// TEST DATA
const testWorkouts = generateTestWorkouts();
//

const App = () => (
  <React.Fragment>
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Calendar']}>
          <Menu.Item key="Calendar">Calendar</Menu.Item>
          <Menu.Item key="Workouts">Workouts</Menu.Item>
          <Menu.Item key="Start Workout">Start Workout</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Space>
              <WorkoutCalendar workouts={testWorkouts} />
              <Divider type="vertical" className="workout-calendar-divider" />
              <WorkoutTotals workouts={testWorkouts} />
            </Space>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </React.Fragment>
);

export default App;
