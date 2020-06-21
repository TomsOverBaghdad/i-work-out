import React from 'react';
import { Table, Typography, Space } from 'antd';

import { WorkoutIcon } from './WorkoutIcon';

import type { Workout } from './types'

const { Column } = Table;
const { Text } = Typography;

type Props = {|
  workouts: Array<Workout>
|};

type WorkoutTotalProps = {|
  workout: Workout,
  total: number,
|};


const renderWorkoutColumn = ({workout, total}: WorkoutTotalProps) => (
  <Space>
    <WorkoutIcon
      color={workout.color}
      icon={workout.icon}
      size="2x"
    />
    <Text>{total}</Text>
  </Space>
);

const WorkoutTotal = (workoutTotalProps: WorkoutTotalProps) => (
  <Table rowKey={w => w.workout.name} style={{width: '200px'}} dataSource={[workoutTotalProps]} pagination={false}>
    <Column title={workoutTotalProps.workout.name} render={renderWorkoutColumn} />
  </Table>
);

export const WorkoutTotals = (props: Props) => {
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
    <React.Fragment>
      <Table rowKey={i => i} style={{width: '200px'}} dataSource={[total]} pagination={false}>
        <Column title="Total" render={(t) => <Text strong>{t}</Text>} />
      </Table>
      {workoutTotalsValues.map((workoutTotal, i) => (
        <React.Fragment key={`workout-total-${i}`}>
          <WorkoutTotal {...workoutTotal} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
