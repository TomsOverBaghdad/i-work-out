import React from 'react';
import moment from "moment";
import {
	Calendar,
	Row,
	Col,
	Statistic,
	Typography,
	Button,
} from 'antd';

import { StartWorkoutButton } from './StartWorkoutButton';
import { WorkoutIcon } from './WorkoutIcon';

import { matchDateToMoment } from '../../utils';

import './WorkoutCalendar.less';

const { Title } = Typography;

const GOAL = 16;

const workoutTotalClass = {
	minWidth: 125, marginRight: 16,
}
export const WorkoutTotals = (props) => {
	const workoutTotals = {};
	props.workouts.forEach((workout) => {
		if (!workoutTotals[workout.name]) {
			workoutTotals[workout.name] = {
				workout,
				total: 0
			};
		}
		workoutTotals[workout.name].total += 1;
	})
	const workoutTotalsValues = Object.values(workoutTotals);
	const total = workoutTotalsValues.reduce((acc, curr) => acc + curr.total, 0);

	return (
		<div style={{ display: 'flex', flexWrap: 'wrap'}}>
			<Statistic
				style={workoutTotalClass}
				title="Total"
				value={total}
				suffix={`/ ${GOAL}`} />
			{workoutTotalsValues.map((workoutTotal) => (
				<Statistic
					key={workoutTotal.workout.name}
					style={workoutTotalClass}
					title={workoutTotal.workout.name}
					prefix={<WorkoutIcon workout={workoutTotal.workout} size="1x" />}
					value={workoutTotal.total} />
			))}
		</div>
	);
};

export const WorkoutCalendar = (props) => {
	const currentMoment = moment();
	const disableDate = (date) =>
		date.getMonth() !== currentMoment.month() && date.getYear() !== currentMoment.year();

	const dateCellRender = (date) => {
		const workout = props.workouts.find(w => matchDateToMoment(w.date, date));
		if (!workout) {
			return;
		}
		return (
			<Row style={{ height: "inherit" }} justify="end" align="bottom">
				<Col>
					<WorkoutIcon
						disabled={disableDate(workout.date)}
						workout={workout}
						size="2x"
					/>
				</Col>
			</Row>
		);
	}

	return <Calendar style={{ maxWidth: 1000 }} dateCellRender={dateCellRender} mode="month" />;
};

export const WorkoutCalendarTitle = (props) => (
	<Title level={2}>
		Calendar
		<StartWorkoutButton />
	</Title>
)