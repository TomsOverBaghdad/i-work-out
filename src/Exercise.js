import moment from "moment";

import { generateUUID } from './utils';
// import { ColorPallete } from './colors';

//test data
import { generateTestExcercise } from './testData';
//

export const Types = {
	timed: [
		'time'
	],
	reps: [
		'reps'
	],
	weight: [
		'reps',
		'weight'
	],
	run: [
		'time',
		'distance'
	]
};

const Run = (date) => ({
	name: 'Run',
	icon: 'running',
	color: 'green',
	date: date,
	exercises: [
		{
			id: generateUUID(""),
			date: date,
			name: 'Run',
			type: 'run',
			distance: null,
			time: null,
		}
	],
});

const ChestAndBack = (date) => ({
	name: 'Chest & Back',
	icon: 'dumbbell',
	color: 'dark-blue',
	date: date,
	exercises: [
		generateTestExcercise(1, 1),
		generateTestExcercise(4, 2),
		generateTestExcercise(5, 3),
		generateTestExcercise(6, 4),
		generateTestExcercise(1, 5),
		generateTestExcercise(4, 6),
		generateTestExcercise(5, 7),
		generateTestExcercise(6, 8)
	],
});

const ShouldersAndArms = (date) => ({
	name: "Shoulders & Arms",
	icon: 'people-carry',
	color: 'blue',
	date: date,
	exercises: [
		generateTestExcercise(2, 1),
		generateTestExcercise(7, 2),
		generateTestExcercise(8, 3),
		generateTestExcercise(2, 4),
		generateTestExcercise(7, 5),
		generateTestExcercise(8, 6),
		generateTestExcercise(2, 7),
		generateTestExcercise(7, 8),
		generateTestExcercise(8, 9)
	],
});

export const Workouts = [
	Run(moment().toDate()),
	ChestAndBack(moment().toDate()),
	ShouldersAndArms(moment().toDate())
]


export const ExerciseStatus = {
  Done: 'Done',
  InProgress: 'In Progress',
  ToDo: 'To Do',
};
