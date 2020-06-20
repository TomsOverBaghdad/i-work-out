import React from 'react';
import moment from "moment";
import { Calendar, Row, Col } from 'antd';

import { faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';

import { WorkoutIcon } from './WorkoutIcon';

import { ColorPallete } from '../colors';

type Props = {|
  workouts: Array<Workouts>
|};

type Workouts = {|
  date: Date,
  icon: String,
|};

export const WorkoutCalendar = (props: Props) => {
  const dateCellRender = (date: Date) => {
    // if (moment(date).format('L') === '06/11/2020') {
    //   return (
    //     <Row style={{height: "inherit"}} justify="end" align="bottom">
    //       <Col>
    //         <FontAwesomeIcon className="workout" icon={faDumbbell} size="3x"/>
    //       </Col>
    //     </Row>
    //   );
    // }
    const r = Math.floor(Math.random() * 5)
    const hex = Object.keys(ColorPallete)[r];
    const icon = r % 2 ? faRunning : faDumbbell;
    return (
      <Row style={{height: "inherit"}} justify="end" align="bottom">
        <Col>
          <WorkoutIcon color={hex} icon={icon} />
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
