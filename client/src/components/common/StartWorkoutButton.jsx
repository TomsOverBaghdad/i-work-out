import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Modal,
	Button,
	Select,
} from 'antd';

import { ClientRoutes } from '../../routes';
import { WorkoutIcon } from './WorkoutIcon';

import { Workouts } from '../../Exercise';

const SelectWorkout = ({ onChange }) => (
	<Select
		placeholder="Select Workout"
		style={{ width: 220 }}
		size="large"
		onChange={onChange}
	>
		{Workouts.map((w, i) => (
			<Select.Option key={i}>
				<div style={{ display: 'flex', alignContent: 'center' }} >
					<WorkoutIcon workout={w} size="2x" />
					<span style={{ paddingLeft: 5 }}>
						{w.name}
					</span>
				</div>
			</Select.Option>
		))}
	</Select>
);

const StartWorkoutModal = ({ visible, close }) => {
	const history = useHistory();

	const onWorkoutSelect = (value) => {
		const workout = Workouts[value];
		console.log(workout)
		history.push(ClientRoutes.workouts().new(), { workout });
	};

	return (
		<Modal
			title="Select a workout"
			visible={visible}
			onCancel={close}
			footer={[
				<Button key="back" onClick={close}>
					Cancel
  	    		</Button>,
				<Button
					key="submit"
					type="primary"
				>
					Create
  	    		</Button>,
			]}
		>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<SelectWorkout onChange={onWorkoutSelect} />
			</div>
		</Modal>
	);
}

export const StartWorkoutButton = (props) => {
	const [showStartWorkoutModal, setShowStartWorkoutModal] = useState(false);

	return (
		<React.Fragment>
			<Button
				className="float-right"
				size="large"
				type="primary"
				style={{ marginTop: 3 }}
				onClick={() => setShowStartWorkoutModal(true)}
			>
				Start Workout
			</Button>
			<StartWorkoutModal
				visible={showStartWorkoutModal}
				close={() => setShowStartWorkoutModal(false)}
			/>
		</React.Fragment>
	);
};