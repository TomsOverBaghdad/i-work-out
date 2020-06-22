import React, { useState } from 'react';
import moment from "moment";
import {
  Space,
  Layout,
  Typography,
  Timeline,
  Divider,
  List
} from 'antd';

import { WorkoutIcon } from './WorkoutIcon';

import './StartWorkout.less';

import type { Moment, Workout, Exercise } from './types';

const { Content } = Layout;
const { Title } = Typography;

type StartWorkoutProps = {|
  workout: Workout,
  previousWorkouts: Array<Workout>
|};

type WorkoutTimelineProps = {|
  exercises: Array<Exercise>,
|};


type WorkoutFormListProps = {|
  exercise: Exercise,
  previousWorkouts: Array<Workout>
|};

const ExerciseStatus = {
  Done: 'Done',
  InProgress: 'In InProgress',
  ToDo: 'To do',
};

const RenderCurentExercise = (exercise) => (
  <div>

  </div>
)

const RenderPreviousExercise = (exercise) => (
  <div className="previous-exercise">

  </div>
)

const WorkoutFormList = (props: WorkoutFormListProps) => {
  props.exercise.current = true;
  const exercises = [props.exercise];
  const previousExercises = props.previousExercises
    .map(w => w.exercises.find(e => e.order === props.exercise.order));
  exercises.push(...previousExercises);
  return (
    <React.Fragment>
      <Title level={3}>{props.exercise.name}</Title>
      <List
        itemLayout="horizontal"
        dataSource={exercises}
        renderItem={exercise => (
          <List.Item>
            {exercise.current && RenderCurentExercise(exercise)}
            {!exercise.current && RenderPreviousExercise(exercise)}
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

const WorkoutTimeline = (props: WorkoutTimelineProps) => {
  const getColor = (exercise) => {
    if (exercise.status === ExerciseStatus.Done) {
      return 'green';
    } else if (exercise.status === ExerciseStatus.InProgress) {
      return 'blue';
    } else if (exercise.status === ExerciseStatus.Done) {
      return 'gray';
    }
  };

  return (
    <Timeline style={{width: '150px'}}>
      {props.exercises.map((exercise, i) => (
        <Timeline.Item color={getColor(exercise)}>
          {exercise.name}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export const StartWorkoutLayout = (props: CalendarProps) => {
  const previousExercises = props.previousWorkouts
    .filter(w => w.name === props.workout.name);

  return (
    <Layout className="site-layout-background" style={{ margin: '50px' }}>
      <Content style={{ padding: '24px 48px' }}>
        <Title> Start Workout! </Title>
        <div class="flex-container align-center" style={{width: '100%'}}>
          <WorkoutTimeline exercises={props.workout.exercises} />
          <Divider className="workout-divider" type="vertical" />
          <div className="workout-form-list">
            <WorkoutFormList
              previousExercises={previousExercises}
              exercise={props.workout.exercises[0]}
            />
          </div>
        </div>
      </Content>
    </Layout>
)};
