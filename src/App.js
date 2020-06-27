import React from 'react';

import { Layout, Menu } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faRunning, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

import { WorkoutCalendarLayout } from './components/WorkoutCalendar';
import { StartWorkoutLayout } from './components/StartWorkout';

import './App.less';

// TEST IMPORTS
import { generateTestWorkout, generateTestWorkouts } from './testData';
//


// add to library to use as strings instead of objects
// remove 'fa' and hyphenate instead of camel case
// <FontAwesomeIcon icon='dumbbell' />
library.add(faDumbbell, faRunning, faPeopleCarry);


const { Header } = Layout;

// TEST DATA
const testWorkouts = generateTestWorkouts();
const testWorkout = generateTestWorkout(0, null, false);
//
// <StartWorkoutLayout previousWorkouts={testWorkouts} workout={testWorkout}/>
// <WorkoutCalendarLayout workouts={testWorkouts} />

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
      <StartWorkoutLayout previousWorkouts={testWorkouts} workout={testWorkout}/>
    </Layout>
  </React.Fragment>
);

export default App;
