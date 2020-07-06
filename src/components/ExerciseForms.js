import React from 'react';
import {
  Form,
  InputNumber,
  TimePicker,
} from 'antd';
import {dateToString} from '../utils';

export const RenderExercise = ({exercise, isActive}) => {
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
};

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
