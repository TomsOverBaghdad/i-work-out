import React from 'react';

import { WorkoutCalendar, WorkoutTotals, WorkoutCalendarTitle } from './common/WorkoutCalendar';

import { generateTestWorkout, generateTestWorkouts } from '../testData';

const testWorkouts = generateTestWorkouts();

const Home = (props) => {
	return (
		<div>
			<div style={{padding: "32px 16px 0px 16px"}}>
				<WorkoutCalendarTitle workouts={testWorkouts} />				
				<WorkoutTotals workouts={testWorkouts} />
			</div>
			<WorkoutCalendar workouts={testWorkouts} />
		</div>
	);
};

export default Home;
