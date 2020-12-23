import React from 'react';
import {
  Form,
  InputNumber,
  TimePicker,
} from 'antd';
import {dateToString} from '../utils';

export const RenderExercise = ({exercise, isActive, form}) => {
  let className = "exercise-list-item";
  className += isActive ? "" : " previous-exercise";

  let ExerciseElement;
  if (exercise.type === "run") {
    ExerciseElement = () => <RenderRun exercise={exercise} isActive={isActive} form={form} />;
  } else if (exercise.type === "reps") {
    ExerciseElement = () =>  <RenderReps exercise={exercise} isActive={isActive} form={form} />;
  } else if (exercise.type === "timed") {
    ExerciseElement = () =>  <RenderTimed exercise={exercise} isActive={isActive} form={form} />;
  }else if (exercise.type === "weight") {
    ExerciseElement = () =>  <RenderWeight exercise={exercise} isActive={isActive} form={form} />;
  }

  return (
    <div className={className}>
      <ExerciseElement />
    </div>
  );
};

const onFinish = (values) => {
  console.log({values})
}

const RenderRun = ({exercise, isActive, form}) => (
  <Form
   layout="inline"
   form={isActive && form}
   initialValues={{ time: exercise.time, distance: exercise.distance }}
   onFinish={onFinish}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Time" name="time" rules={[{ required: isActive, message: 'Do your workout!' }]}>
      <TimePicker
        format="mm:ss"
        disabled={!isActive}
      />
    </Form.Item>
    <Form.Item label="Distance" name="distance" rules={[{ required: isActive, message: 'Do your workout!' }]}>
      <InputNumber
        step="0.1"
        formatter={value => `${value} mi`}
        parser={value => value.replace(' mi', '')}
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderReps = ({exercise, isActive, form}) => (
  <Form
   layout="inline"
   form={isActive && form}
   initialValues={{ reps: exercise.reps }}
   onFinish={onFinish}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Reps" name="reps" rules={[{ required: isActive, message: 'Do your workout!' }]}>
      <InputNumber
        step="1"
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderWeight = ({exercise, isActive, form}) => (
  <Form
   layout="inline"
   form={isActive && form}
   initialValues={{ reps: exercise.reps, weight: exercise.weight }}
   onFinish={onFinish}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Reps" name="reps" rules={[{ required: isActive, message: 'Do your workout!' }]}>
      <InputNumber
        step="1"
        disabled={!isActive}
      />
    </Form.Item>
    <Form.Item label="Weight" name="weight" rules={[{ required: isActive, message: 'Do your workout!' }]}>
      <InputNumber
        step="1"
        formatter={value => `${value} lbs`}
        parser={value => value.replace(' lbs', '')}
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);

const RenderTimed = ({exercise, isActive, form}) => (
  <Form
   layout="inline"
   form={isActive && form}
   initialValues={{ time: exercise.time }}
   onFinish={onFinish}
  >
    <Form.Item label="Date">
      <span className="ant-form-text workout-date">{dateToString(exercise.date)}</span>
    </Form.Item>
    <Form.Item label="Time" name="time" rules={[{ required: isActive, message: 'Do your workout!' }]}>
      <TimePicker
        format="mm:ss"
        disabled={!isActive}
      />
    </Form.Item>
  </Form>
);
