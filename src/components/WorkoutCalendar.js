import React from 'react';
import moment from "moment";
import {
  Calendar,
  Row,
  Col,
  Space,
  Statistic,
  Layout,
  Typography,
  Button,
} from 'antd';

import { matchDateToMoment } from '../utils';
import { WorkoutIcon } from './WorkoutIcon';

import type { Moment, Workout } from './types';

const { Content } = Layout;
const { Title } = Typography;

type CalendarProps = {|
  workouts: Array<Workout>
|};

type WorkoutTotalsProps = {|
  workouts: Array<Workout>
|};

const GOAL = 16;

const WorkoutTotals = (props: WorkoutTotalsProps) => {
  const workoutTotals = {};
  props.workouts.forEach((workout) => {
    if (!workoutTotals[workout.name]) {
      workoutTotals[workout.name] = {
        workout,
        total: 0
      };
    }
    workoutTotals[workout.name].total += 1;
  })
  const workoutTotalsValues = Object.values(workoutTotals);
  const total = workoutTotalsValues.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <Space size="large">
      <Statistic
        style={{'width': 100}}
        title="Total"
        value={total}
        suffix={`/ ${GOAL}`} />
      {workoutTotalsValues.map((workoutTotal) => (
        <React.Fragment key={workoutTotal.workout.name}>
          <Statistic
            style={{minWidth: 100}}
            title={workoutTotal.workout.name}
            prefix={<WorkoutIcon workout={workoutTotal.workout} size="1x" />}
            value={workoutTotal.total} />
        </React.Fragment>
      ))}
    </Space>
  );
};

const WorkoutCalendar = (props: CalendarProps) => {
  const currentMoment = moment();
  const disableDate = (date: Date) =>
    date.getMonth() !== currentMoment.month() && date.getYear() !== currentMoment.year();

  const dateCellRender = (date: Moment) => {
    const workout = props.workouts.find(w => matchDateToMoment(w.date, date));
    if (!workout) {
      return;
    }
    return (
      <Row style={{height: "inherit"}} justify="end" align="bottom">
        <Col>
          <WorkoutIcon
            disabled={disableDate(workout.date)}
            workout={workout}
            size="3x"
          />
        </Col>
      </Row>
    );
  }

  return (
    <React.Fragment>
      <Calendar dateCellRender={dateCellRender}/>
    </React.Fragment>
  );
};

export const WorkoutCalendarLayout = (props: CalendarProps) => (
  <Layout className="site-layout-background" style={{ margin: 50 }}>
    <Content style={{ padding: '24px 48px' }}>
      <Title>
        Workout Calendar
        <Button
          className="float-right"
          size="large"
          type="primary"
          style={{marginTop: 3}}
        >
          Start Workout
        </Button>
      </Title>
      <WorkoutTotals {...props} />
      <WorkoutCalendar {...props} />
    </Content>
   </Layout>
)
