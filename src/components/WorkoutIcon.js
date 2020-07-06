import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './WorkoutIcon.less';

// import type { Workout } from './types';

// type Props = {|
// 	disabled: bool,
// 	size: string,
// 	workout: Workout,
// |};

export const WorkoutIcon = ({workout, size, disabled}) => {
	const disabledClass = disabled ? 'disabled' : '';
  return (
  	<FontAwesomeIcon
  		inverse={true}
	  	className={`workout-icon ${workout.color} ${disabledClass}`}
	  	icon={workout.icon}
	  	size={size || '3x'}
	  />
	);
};
