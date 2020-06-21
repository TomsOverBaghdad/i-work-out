import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './WorkoutIcon.less';

import type { FaIcon } from './types';

type Props = {|
	color: string,
	disabled: bool,
	icon: FaIcon,
	size: string,
|};

export const WorkoutIcon = (props: Props) => {
	const disabledClass = props.disabled ? 'disabled' : '';
  return (
  	<FontAwesomeIcon
  		inverse={true}
	  	className={`workout-icon ${props.color} ${disabledClass}`}
	  	icon={props.icon}
	  	size={props.size || '3x'}
	  />
	);
};
