import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './WorkoutIcon.less';

export const WorkoutIcon = ({ workout, size, disabled }) => {
	const disabledClass = disabled ? 'disabled' : '';
	return (
		<FontAwesomeIcon
			style={{ backgroundColor: workout.color, color: 'white' }}
			className={`workout-icon ${disabledClass}`}
			icon={workout.icon}
			size={size || '2x'}
		/>
	);
};
