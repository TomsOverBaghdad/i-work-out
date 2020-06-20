import React from 'react';
import { Calendar, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './WorkoutIcon.less';

type Props = {|
	color: String,
	icon: Object, //fa icon
|};

export const WorkoutIcon = (props: Props) => (
  <FontAwesomeIcon color="white" className={`workout-icon ${props.color}`} icon={props.icon} size="3x"/>
);
