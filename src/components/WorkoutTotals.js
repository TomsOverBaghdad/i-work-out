import React from 'react';
import moment from "moment";
import { Calendar, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';

type Props = {|
  workouts: Array<Workouts>
|};

type Workouts = {|
  date: Date,
  icon: String,
|};

export const WorkoutTotals = (props: Props) => {
  return (
    <React.Fragment>
      <Calendar dateCellRender={dateCellRender}/>
    </React.Fragment>
  );
};
