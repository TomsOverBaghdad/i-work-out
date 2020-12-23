import React, { useState } from 'react';

import {
  Button,
  Layout,
  Typography,
  Divider,
  List,
  Steps,
  Select,
  Form,
} from 'antd';
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons';

import { WorkoutIcon } from './WorkoutIcon';
import { RenderExercise } from './ExerciseForms';
import { ExerciseStatus, Workouts } from '../Exercise';
import { ColorPallete } from '../colors';

import './StartWorkout.less';

const { Content } = Layout;
const { Title } = Typography;
const { Step } = Steps;
const { Option } = Select;

const WorkoutFormList = ({form, currentExercise, currentExerciseIndex, previousWorkouts}) => {
  currentExercise.active = true;
  const previousExercises = previousWorkouts.map(w => w.exercises[currentExerciseIndex]);
  console.log({w_count: previousWorkouts.length, e_count: previousExercises.length})
  console.log({diff: currentExercise, diff2: previousExercises[0]})
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
            <RenderExercise exercise={exercise} isActive={exercise.active} form={form} />
          </List.Item>
        )}
      />
    </div>
  );
};

const WorkoutSteps = ({exercises, currentExerciseIndex}) => {
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
      <Steps direction="vertical" current={currentExerciseIndex}>
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
  const [form] = Form.useForm();

  function buttonNextonClick(event) {
    console.log('submit')
    const x = form.submit();
    console.log({submit: x})
    console.log('setCurrentExercise')
    setCurrentExercise(currentExerciseIndex + 1);
  }

  const WorkoutTitle = () => (
    <Title>
      <WorkoutIcon workout={selectedWorkout} size="1x" />
      <span style={{paddingLeft: 14}}>{selectedWorkout.name}</span>
      <Button
        className="float-right"
        size="large"
        type="primary"
        htmlType="submit"
        style={{marginTop: 3}}
        onClick={buttonNextonClick}
      >
        Next
      </Button>
    </Title>
  );

  const ShowContent = () => {
    if (selectedWorkout) {
      const previousCurrentWorkouts = previousWorkouts
        .filter(w => w.name === selectedWorkout.name);
      console.log(selectedWorkout)
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
              form={form}
              currentExercise={selectedWorkout.exercises[currentExerciseIndex]}
              previousWorkouts={previousCurrentWorkouts}
              currentExerciseIndex={currentExerciseIndex}
            />
          </div>
        </React.Fragment>
      );
    }
    return (
      <div className="select-workout-wrapper">
        <SelectWorkout setSelectedWorkout={setSelectedWorkout} />
      </div>
    );
  };

  return (
    <Layout className="site-layout-background" style={{ margin: 50 }}>
      <Content style={{ padding: '24px 48px' }}>
        <ShowContent />
      </Content>
    </Layout>
)};
