import React, { useState } from 'react';
import moment from "moment";
import {
  Button,
  Space,
  Layout,
  Typography,
  Divider,
  List,
  Form,
  InputNumber,
  TimePicker,
  Steps,
  Dropdown,
  Menu,
} from 'antd';
import { LoadingOutlined, CheckCircleTwoTone, DownOutlined } from '@ant-design/icons';

import { WorkoutIcon } from './WorkoutIcon';
import { dateToString } from '../utils';
import { ExerciseStatus, Exercises } from '../Exercise';
import { ColorPallete } from '../colors';

import './StartWorkout.less';

import type { Moment, WorkoutType, ExerciseType } from './types';

const { Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;

type StartWorkoutProps = {|
  workout: WorkoutType,
  previousWorkouts: Array<WorkoutType>
|};

type WorkoutStepsProps = {|
  exercises: Array<ExerciseType>,
|};


type WorkoutFormListProps = {|
  exercise: ExerciseType,
  previousWorkouts: Array<WorkoutType>
|};


const RenderRun = ({exercise, isActive}) => (
  <Form
   layout="inline"
   initialValues={{ time: exercise.time, distance: exercise.distance }}
   // onValuesChange={onFormLayoutChange}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Time" name="time">
      <TimePicker
        format="mm:ss"
        disabled={!isActive}
      />
    </Form.Item>
    <Form.Item label="Distance" name="distance">
      <InputNumber
        step="0.1"
        formatter={value => `${value} mi`}
        parser={value => value.replace(' mi', '')}
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderReps = ({exercise, isActive}) => (
  <Form
   layout="inline"
   initialValues={{ reps: exercise.reps }}
   // onValuesChange={onFormLayoutChange}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Reps" name="reps">
      <InputNumber
        step="1"
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderWeight = ({exercise, isActive}) => (
  <Form
   layout="inline"
   initialValues={{ reps: exercise.reps, weight: exercise.weight }}
   // onValuesChange={onFormLayoutChange}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Reps" name="reps">
      <InputNumber
        step="1"
        disabled={!isActive}
      />
    </Form.Item>
    <Form.Item label="Weight" name="weight">
      <InputNumber
        step="1"
        formatter={value => `${value} lbs`}
        parser={value => value.replace(' lbs', '')}
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderTimed = ({exercise, isActive}) => (
  <Form
   layout="inline"
   initialValues={{ time: exercise.time }}
   // onValuesChange={onFormLayoutChange}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Time" name="time">
      <TimePicker
        format="mm:ss"
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderExercise = ({exercise, isActive}) => {
  let className = "exercise-list-item";
  className += isActive ? "" : " previous-exercise";

  let ExerciseElement;
  if (exercise.type === "run") {
    ExerciseElement = () => <RenderRun exercise={exercise} isActive={isActive} />;
  } else if (exercise.type === "reps") {
    ExerciseElement = () =>  <RenderReps exercise={exercise} isActive={isActive} />;
  } else if (exercise.type === "timed") {
    ExerciseElement = () =>  <RenderTimed exercise={exercise} isActive={isActive} />;
  }else if (exercise.type === "weight") {
    ExerciseElement = () =>  <RenderWeight exercise={exercise} isActive={isActive} />;
  }

  return (
    <div className={className}>
      <ExerciseElement />
    </div>
  );
}

const WorkoutFormList = (props: WorkoutFormListProps) => {
  props.currentExcercise.active = true;
  const previousExercises = props.previousExercises
    .map(w => w.exercises.find(e => e.order === props.currentExcercise.order));
  const exercises = previousExercises
    .concat(props.currentExcercise)
    .sort((a, b) => b.date - a.date);

  return (
    <div className="workout-form-list-content">
      <Title level={3}>{props.exercise.name}</Title>
      <List
        className="workout-form-list"
        itemLayout="horizontal"
        dataSource={exercises}
        rowKey='id'
        renderItem={exercise => (
          <List.Item>
            <RenderExercise exercise={exercise} isActive={exercise.active} />
          </List.Item>
        )}
      />
    </div>
  );
};

const WorkoutSteps = (props: WorkoutStepsProps) => {
  const getProgressDot = (status) => {
    if (status === ExerciseStatus.InProgress) {
      return <LoadingOutlined style={{color: ColorPallete['blue']}}/>;
    } else if (status === ExerciseStatus.Done) {
      return <CheckCircleTwoTone twoToneColor={ColorPallete['green']} />;
    }
    return <CheckCircleTwoTone twoToneColor={ColorPallete['grey']} />;
  };

  return (
    <div className="workout-steps">
      <Steps direction="vertical">
        {props.exercises.map((exercise, i) => (
          <Step
            key={i}
            title={exercise.name}
            description={exercise.status}
            icon={getProgressDot(exercise.status)}
          />
        ))}
      </Steps>
    </div>
  );
};

export const StartWorkoutLayout = (props: CalendarProps) => {
  const previousExercises = props.previousWorkouts
    .filter(w => w.name === props.workout.name);

  const [currentExcerciseIndex, setCurrentExcercise] = useState(0);

  const CurrentWorkoutIcon = () => (
    <WorkoutIcon
      color={props.workout.color}
      icon={props.workout.icon}
      size="1x"
    />
  );

  function buttonNextonClick(event) {
    console.log(event);
  }

  const WorkoutHeader = () => (
    <Title>
      <CurrentWorkoutIcon />
      {/* use span for space*/}
      <span> </span>
      {props.workout.name}
      <Button
        className="float-right"
        size="large"
        type="primary"
        style={{marginTop: '3px'}}
        onClick={buttonNextonClick}
      >
        Next
      </Button>
    </Title>
  );

  const SelectWorkout = () => {
    //<Menu onClick={handleMenuClick}>
    const menu = (
      <Menu>
        {Exercises.map((e, i) => (
          <Menu.Item key={i}>
            <Space>
              <div style={{width: '35px'}}>
                <WorkoutIcon color={e.color} icon={e.icon} size="2x"/>
              </div>
              {e.name}
            </Space>
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <div className="flex-container select-workout-wrapper">
        <Dropdown overlay={menu}>
          <Button size="large">
            Select Workout <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    );
  }

  // <WorkoutHeader />
  // <div className="flex-container align-center" style={{width: '100%'}}>
  //   <WorkoutSteps exercises={props.workout.exercises} />
  //   <Divider className="workout-divider" type="vertical" />
  //   <WorkoutFormList
  //     previousExercises={previousExercises}
  //     currentExcerciseIndex={currentExcercise}
  //   />
  // </div>

  return (
    <Layout className="site-layout-background" style={{ margin: '50px' }}>
      <Content style={{ padding: '24px 48px' }}>
        <SelectWorkout />
      </Content>
    </Layout>
)};
