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
  Select,
} from 'antd';
import { LoadingOutlined, CheckCircleTwoTone, DownOutlined } from '@ant-design/icons';

import { WorkoutIcon } from './WorkoutIcon';
import { RenderExercise } from './ExerciseForms';
import { dateToString } from '../utils';
import { ExerciseStatus, Workouts } from '../Exercise';
import { ColorPallete } from '../colors';

import './StartWorkout.less';

const { Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;
const { Option } = Select;

const WorkoutFormList = ({currentExercise, currentExerciseIndex, previousWorkouts}) => {
  currentExercise.active = true;
  currentExercise.status = ExerciseStatus.InProgress;
  console.log("test", {currentExercise})
  const previousExercises = previousWorkouts.map(w => w.exercises[currentExerciseIndex]);
  const exercises = previousExercises
    .concat(currentExercise)
    .sort((a, b) => b.date - a.date);

  return (
    <div className="workout-form-list-content">
      <Title level={3}>{currentExercise.name}</Title>
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

const WorkoutSteps = ({exercises, currentExerciseIndex}) => {
  console.log(exercises)
  const getProgressDot = (exerciseIndex) => {
    if (exerciseIndex === currentExerciseIndex) {
      return <LoadingOutlined style={{color: ColorPallete['blue']}}/>;
    } else if (exerciseIndex < currentExerciseIndex) {
      return <CheckCircleTwoTone twoToneColor={ColorPallete['green']} />;
    }
    return <CheckCircleTwoTone twoToneColor={ColorPallete['grey']} />;
  };

  const getDescription = (exerciseIndex) => {
    if (exerciseIndex === currentExerciseIndex) {
      return ExerciseStatus.InProgress;
    } else if (exerciseIndex < currentExerciseIndex) {
      return ExerciseStatus.Done;
    }
    return ExerciseStatus.ToDo;
  };

  return (
    <div className="workout-steps">
      <Steps direction="vertical">
        {exercises.map((exercise, i) => (
          <Step
            key={i}
            title={exercise.name}
            description={getDescription(i)}
            icon={getProgressDot(i)}
          />
        ))}
      </Steps>
    </div>
  );
};

const SelectWorkout = ({setSelectedWorkout}) => {
  const handleWorkoutChange = (value) => {
    console.log("workout onChange", {value})
    setSelectedWorkout(Workouts[value]);
  };

  return (
    <Select
      placeholder="Select Workout"
      style={{width: 220}}
      size="large"
      onChange={handleWorkoutChange}
    >
      {Workouts.map((w, i) => (
        <Option key={i}>
          <div className="flex-container align-center">
            <WorkoutIcon workout={w} size="2x"/>
            <span style={{paddingLeft: 5}}>
              {w.name}
            </span>
          </div>
        </Option>
      ))}
    </Select>
  );
};

export const StartWorkoutLayout = ({previousWorkouts}) => {
  const [currentExerciseIndex, setCurrentExercise] = useState(0);
  const [selectedWorkout, setSelectedWorkout] = useState();

  function buttonNextonClick(event) {
    console.log(event);
  }

  const WorkoutTitle = () => (
    <Title>
      <WorkoutIcon workout={selectedWorkout} size="1x" />
      <span style={{paddingLeft: 5}}>{selectedWorkout.name}</span>
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

  const ShowContent = () => {
    console.log('Show Content', {selectedWorkout});

    if (selectedWorkout) {
      const previousCurrentWorkouts = previousWorkouts
        .filter(w => w.name === selectedWorkout.name);

      return (
        <React.Fragment>
          <WorkoutTitle />
          <div className="flex-container align-center" style={{width: '100%'}}>
            <WorkoutSteps
              exercises={selectedWorkout.exercises}
              currentExerciseIndex={currentExerciseIndex}
            />
            <Divider className="workout-divider" type="vertical" />
            <WorkoutFormList
              currentExercise={selectedWorkout.exercises[currentExerciseIndex]}
              previousWorkouts={previousCurrentWorkouts}
              currentExerciseIndex={currentExerciseIndex}
            />
          </div>
        </React.Fragment>
      )
    }
    return <SelectWorkout setSelectedWorkout={setSelectedWorkout} />
  };

  return (
    <Layout className="site-layout-background" style={{ margin: '50px' }}>
      <Content style={{ padding: '24px 48px' }}>
        <ShowContent />
      </Content>
    </Layout>
)};
