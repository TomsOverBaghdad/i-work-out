import React from 'react';
import moment from "moment";
import { Calendar, Row, Col } from 'antd';

import { WorkoutIcon } from './WorkoutIcon';

import type { Moment, Workout } from './types';

type Props = {|
  workouts: Array<Workout>
|};

function matchDateToMoment(date: Date, dateMoment: Moment) {
  return moment(date).format('MM/DD/YYYY') === dateMoment.format('MM/DD/YYYY');
}

export const WorkoutCalendar = (props: Props) => {
  const month = moment().month();
  const disableDate = (date: Date) => date.getMonth() !== month;

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
            color={workout.color}
            icon={workout.icon}
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
